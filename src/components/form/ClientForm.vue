<template>
  <div class="client-form">
    <div class="client-form__header">
      <h1>{{title}}</h1>
    </div>
    <div class="client-form__main">
      <FormProgress
          @navigate="navigate"
          :steps="steps"
          :active="page"
          :errors="errors"
          :valid="valid"></FormProgress>
      <div class="client-form__content">
        <form ref="form" action="#" @submit.prevent="onSubmit" novalidate>
          <FormSlider ref="slider" @slide-change="onSlideChange" :show-navigation="!formSubmitted">
            <component
                ref="pages"
                v-for="(component, index) in pages"
                :is="component"
                :key="index"
                :active="page === index">
            </component>
            <template slot="success-page">
              <FormSuccess :data="formData" @reset="resetForm"></FormSuccess>
            </template>
          </FormSlider>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/common/FormInput.vue';
import {validationMixin} from 'vuelidate';
import Select from '@/components/common/Select.vue';
import Checkbox from '@/components/common/Checkbox.vue';
import RadioButton from '@/components/common/RadioButton.vue';
import MaskedInput from '@/components/common/MaskedInput.vue';
import Button from "@/components/common/Button.vue";
import FormSlider from "@/components/form/FormSlider.vue";
import PagePatient from "@/components/form/pages/PagePatient.vue";
import PageAddress from "@/components/form/pages/PageAddress.vue";
import PageDocument from "@/components/form/pages/PageDocument.vue";
import PageMedical from "@/components/form/pages/PageMedical.vue";
import FormProgress from "@/components/form/FormProgress.vue";
import FormSuccess from "@/components/form/FormSuccess.vue";

export default {
  name: 'ClientForm',
  components: {
    FormProgress,
    FormInput,
    Select,
    Checkbox,
    RadioButton,
    MaskedInput,
    Button,
    FormSlider,
    PagePatient,
    PageAddress,
    PageDocument,
    PageMedical,
    FormSuccess
  },
  mixins: [validationMixin],
  data() {
    return {
      page: 0,
      steps: [
        'Пациент',
        'Адрес',
        'Документ',
        'Дополнительно'
      ],
      pages: [PagePatient, PageAddress, PageDocument, PageMedical],
      errors: new Set(),
      valid: new Set(),
      formSubmitted: false,
      formData: {},
    }
  },
  methods: {
    onSubmit() {
      let valid = true;
      for (let i = 0; i < this.$refs.pages.length; i++) {
        const page = this.$refs.pages[i];
        const v = page.getValidator();
        v.$touch();
        if (v.$anyError) {
          valid = false;
          this.$refs.slider.navigate(i);
          break;
        }
      }
      if (valid) {
        this.formData = this.$refs.pages.reduce((acc, page) => {
          acc[page.$options.name] = page.getData();
          return acc;
        }, {});
        this.formSubmitted = true;
        this.$refs.slider.toSuccessPage();
      }
    },
    onSlideChange(index) {
      const v = this.$refs.pages[this.page].getValidator();
      if (v.$anyError) {
        this.valid.delete(this.page);
        this.errors.add(this.page);
      } else {
        this.errors.delete(this.page);
        this.valid.add(this.page);
      }
      this.page = index;
    },
    navigate(index) {
      this.$refs.slider.navigate(index);
      console.log(this.$refs.pages[index].getValidator());
    },
    resetForm() {
      this.page = 0;
      this.formSubmitted = false;
      this.errors = new Set();
      this.valid = new Set();
      this.$refs.pages.forEach(page => {
        page.reset();
      })
      this.$refs.form.reset();
      this.$refs.slider.reset();
    }
  },
  computed: {
    title() {
      return this.formSubmitted ? 'Клиент добавлен!' : 'Добавление клиента';
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/common";
@import "../../styles/input-group";

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.client-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 3rem;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .25);

  &__success {
    display: flex;
    flex-direction: column;
    align-items: center;
    .button {
      margin-top: 1rem;
    }
  }

  @media (max-width: 700px) {
    padding: 1rem;
  }

  &__header {
    text-align: center;
  }

  &__page {
    flex: 1 0 100%;
    padding: 0 3px;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }

  &__page {
    .col {
      height: 100%;
    }
  }

  &__submit {
    margin-top: 2rem;
  }
}

.col_options {
  justify-content: space-between;
}
</style>

