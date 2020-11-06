<template>
  <div class="client-form">
    <div class="client-form__header">
      <h1>Добавление клиента</h1>
    </div>
    <FormProgress
        @navigate="navigate"
        :steps="steps"
        :active="page"
        :errors="errors"
        :valid="valid"></FormProgress>
    <div class="client-form__content">
      <form action="#" @submit.prevent="onSubmit" novalidate>
        <FormSlider ref="slider" @slide-change="onSlideChange" adaptive-height>
          <component
              ref="pages"
              v-for="(component, index) in pages"
              :is="component"
              :key="index"
              :active="page === index">
          </component>
        </FormSlider>
      </form>
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
import PagePatient from "@/components/form/PagePatient.vue";
import PageAddress from "@/components/form/PageAddress.vue";
import PageDocument from "@/components/form/PageDocument.vue";
import PageMedical from "@/components/form/PageMedical.vue";
import FormProgress from "@/components/form/FormProgress.vue";

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
    PageMedical
  },
  mixins: [validationMixin],
  data() {
    return {
      page: 0,
      steps: [
        'Пациент',
        'Адрес',
        'Документ',
        'Прочее'
      ],
      pages: [PagePatient, PageAddress, PageDocument, PageMedical],
      errors: new Set(),
      valid: new Set(),
    }
  },
  methods: {
    onSubmit() {
      for (let i = 0; i < this.$refs.pages.length; i++) {
        const page = this.$refs.pages[i];
        const v = page.getErrors();
        v.$touch();
        if (v.$anyError) {
          this.$refs.slider.navigate(i);
          break;
        }
      }
    },
    onSlideChange(index) {
      const v = this.$refs.pages[this.page].getErrors();
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
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/common";
@import "../../styles/input-group";

.client-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 3rem;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .25);

  @media (max-width: 700px) {
    padding: 1rem;
  }

  &__header {
    h1 {
      padding-left: 3.5rem;
      @media (max-width: 700px) {
        padding-left: 0;
      }
    }
  }

  &__page {
    flex: 1 0 100%;

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

