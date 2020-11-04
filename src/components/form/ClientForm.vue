<template>
  <div class="client-form">
    <div class="client-form__header">
      <h1>Добавление клиента</h1>
    </div>
    <form action="#" @submit.prevent="onSubmit" novalidate>
      <div class="row">
        <div class="col">
          <h2>Пациент</h2>
          <div class="input-group">
            <FormInput
                required
                :value="$v.person.lastName.$model"
                @change="$v.person.lastName.$model = $event.trim()"
                name="last-name"
                id="last-name"
                label="Фамилия">
              <template slot="errors">
                <div class="error" v-if="$v.person.lastName.$dirty && !$v.person.lastName.required">Это поле обязательно</div>
              </template>
            </FormInput>
            <FormInput
                required
                :value="$v.person.firstName.$model"
                @change="$v.person.firstName.$model = $event.trim()"
                name="first-name" id="first-name"
                label="Имя">
              <template slot="errors">
                <div class="error" v-if="$v.person.firstName.$dirty && !$v.person.firstName.required">Это поле обязательно</div>
              </template>
            </FormInput>
            <FormInput v-model.trim="$v.person.patronymic.$model" name="patronymic" id="patronymic" label="Отчество"></FormInput>
            <FormInput
                required
                v-model="$v.person.dateOfBirth.$model"
                name="date-of-birth"
                type="date" id="date-of-birth"
                label="Дата рождения"
                class="input_birth"
            ><template slot="errors">
                <div class="error" v-if="$v.person.dateOfBirth.$dirty && !$v.person.dateOfBirth.required">Это поле обязательно</div>
              </template>
            </FormInput>
            <MaskedInput
                required
                mask="7(___)___-__-__"
                @change="$v.person.phone.$model = $event.trim()"
                @blur="$v.person.phone.$touch()"
                :value="$v.person.phone.$model"
                name="phone"
                type="tel"
                id="phone"
                label="Телефон"
                class="input_phone"
            >
              <template slot="errors">
                <div class="error" v-if="$v.person.phone.$dirty && !$v.person.phone.required">Это поле обязательно</div>
                <div class="error" v-if="$v.person.phone.$dirty && !$v.person.phone.startsWithSeven">Телефон должен быть в формате 7XXXXXXXXXX</div>
                <div class="error" v-if="$v.person.phone.$dirty && !$v.person.phone.length">Телефон должен содержать 11 цифр</div>
              </template>
            </MaskedInput>
            <Checkbox id="no-sms" name="no-sms" v-model="$v.noSMS.$model" value="no-sms"
                      label="Не отправлять СМС"></Checkbox>
            <div class="input">
              <p class="input__label">Пол</p>
              <div class="input-group input-group_row input-group_condensed">
                <RadioButton v-model="$v.person.sex.$model" value="male" name="sex" id="sex-male" label="Мужской"></RadioButton>
                <RadioButton v-model="$v.person.sex.$model" value="female" name="sex" id="sex-female" label="Женский"></RadioButton>
              </div>
            </div>

          </div>
        </div>
        <div class="col">
          <h2>Адрес</h2>
          <div class="input-group">
            <FormInput :style="{width: '128px'}" v-model.trim="$v.address.index.$model" name="index" id="index" label="Индекс"></FormInput>
            <FormInput v-model.trim="$v.address.country.$model" name="country" id="country" label="Страна"></FormInput>
            <FormInput v-model.trim="$v.address.district.$model" name="district" id="district" label="Область"></FormInput>
            <FormInput required v-model.trim="$v.address.city.$model" name="city" id="city" label="Город">
              <template slot="errors">
                <div class="error" v-if="$v.address.city.$dirty && !$v.address.city.required">
                  Это поле обязательно
                </div>
              </template>
            </FormInput>
            <FormInput v-model.trim="$v.address.street.$model" name="street" id="street" label="Улица"></FormInput>
            <FormInput :style="{width: '128px'}" v-model.trim="$v.address.house.$model" name="house" id="house" label="Дом"></FormInput>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Документ, удостоверяющий личность</h2>
          <div class="input-group input-group_document">
            <Select
                required
                v-model="$v.document.type.$model"
                label="Тип документа"
                name="doc-type"
                id="doc-type"
                :options="documentTypes">
              <template slot="errors">
                <div class="error" v-if="$v.document.type.$dirty && !$v.document.type.required">Это поле обязательно</div>
              </template>
            </Select>

            <FormInput v-model.trim="$v.document.serial.$model" name="doc-serial" id="doc-serial" label="Серия и номер"></FormInput>
            <FormInput required v-model="$v.document.issueDate.$model" type="date" name="issue-date" id="issue-date"
                       label="Когда выдан">
              <template slot="errors">
                <div class="error" v-if="$v.document.issuedAt.$dirty && !$v.document.issuedAt.required">Это поле обязательно</div>
              </template>
            </FormInput>
            <FormInput v-model.trim="$v.document.issuedAt.$model" name="issued-at" id="issued-at" label="Кем выдан"></FormInput>
          </div>
        </div>
        <div class="col">
          <h2 class="input-group__title">Опции</h2>
          <div class="input__label">Группа клиентов</div>
          <div class="input-group input-group_list">
            <Checkbox v-model="$v.medical.group.$model" value="vip" name="medical-group" id="group-vip" label="VIP"></Checkbox>
            <Checkbox v-model="$v.medical.group.$model" value="problem" name="medical-group" id="group-problem" label="Проблемные"></Checkbox>
            <Checkbox v-model="$v.medical.group.$model" value="oms" name="medical-group" id="group-oms" label="ОМС"></Checkbox>
          </div>
          <Select
              v-model="$v.medical.doctor.$model"
              label="Лечащий врач"
              name="doctor"
              id="doctor"
              :options="doctors">
          </Select>
        </div>
      </div>

      <div class="client-form__footer">
        <button type="submit">Добавить</button>
      </div>
    </form>
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

export default {
  name: 'ClientForm',
  components: {
    FormInput,
    Select,
    Checkbox,
    RadioButton,
    MaskedInput
  },
  mixins: [validationMixin],
  data() {
    return {
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
      test: '',
    }
  },
  methods: {
    onSubmit() {
      console.log(this.$v);
    },
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
@import "../../styles/input";
.client-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .25);
  &__header {}
  &__footer {
    margin-top: 1rem;
  }
  @media (max-width: 800px) {
    .row {
      flex-direction: column;
      .input {
        max-width: 100%;
      }
    }
  }
}

.col_options {
  justify-content: space-between;
}


</style>

