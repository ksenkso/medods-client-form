<template>
  <div class="client-form">
    <div class="client-form__header">
      <h1>Добавление клиента</h1>
    </div>
    <div class="client-form__content">
      <form action="#" @submit.prevent="onSubmit" novalidate>
        <FormSlider @slide-change="onSlideChange">
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
import {required} from 'vuelidate/lib/validators';
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

export default {
  name: 'ClientForm',
  components: {
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
      person: {
        lastName: '',
        firstName: '',
        patronymic: '',
        dateOfBirth: '',
        phone: '',
        sex: '',
      },
      medical: {
        group: [],
        doctor: null,
      },
      address: {
        index: '',
        country: '',
        district: '',
        city: '',
        street: '',
        house: '',
      },
      document: {
        type: 'passport',
        serial: '',
        issuedAt: '',
        issueDate: '',
      },
      noSMS: false,
      documentTypes: [
        {value: 'passport', text: 'Паспорт'},
        {value: 'birth-certificate', text: 'Свидетельство о рождении'},
        {value: 'driver-license', text: 'Вод. удостоверение'},
      ],
      doctors: [
        {value: '1', text: 'Иванов'},
        {value: '2', text: 'Захаров'},
        {value: '3', text: 'Чернышева'},
      ],
      pages: [PagePatient, PageAddress, PageDocument, PageMedical]
    }
  },
  methods: {
    onSubmit() {
      this.$refs.pages.map(page => {
        const v = page.getErrors();
        v.$touch();
      })
    },
    onSlideChange(index) {
      this.page = index;
    }
  },
  validations: {
    person: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      patronymic: {},
      dateOfBirth: {
        required,
      },
      phone: {
        required,
        startsWithSeven: (value) => value.startsWith('7'),
        length: (value) => value.length === 15, // 11 digits + 2 parens + 2 minuses
      },
      sex: {},
    },
    medical: {
      group: {
        required,
      },
      doctor: {},
    },
    address: {
      index: {},
      country: {},
      district: {},
      city: {
        required,
      },
      street: {},
      house: {},
    },
    document: {
      type: {
        required,
      },
      issueDate: {
        required,
      },
      issuedAt: {},
      serial: {
        hasSpace: (value) => value.indexOf(' ') > -1,
      },
    },
    noSMS: {},
    test: {}
  },
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

  &__header {
    padding-left: 3.5rem;
  }

  &__page {
    flex: 1 0 100%
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 800px) {
    .row {
      flex-direction: column;

      .input {
        max-width: 100%;
      }
    }
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

