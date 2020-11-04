<template>
  <div class="client-form">
    <div class="client-form__header">
      <h1>Добавление клиента</h1>
    </div>
    <form action="#" @submit.prevent="onSubmit" novalidate>
      <h2>Пациент</h2>
      <div class="input-group input-group_fio">
        <FormInput required v-model="$v.person.lastName.$model" name="last-name" id="last-name"
                   label="Фамилия"></FormInput>
        <FormInput required v-model="$v.person.firstName.$model" name="first-name" id="first-name"
                   label="Имя"></FormInput>
        <FormInput v-model="$v.person.patronymic.$model" name="patronymic" id="patronymic" label="Отчество"></FormInput>
      </div>
      <div class="input-group">
        <FormInput
            v-model="$v.person.dateOfBirth.$model"
            name="date-of-birth"
            type="date" id="date-of-birth"
            label="Дата рождения"
            class="input_birth"
        >
        </FormInput>
        <div class="input-group input-group_phone">
          <FormInput required v-model="$v.person.phone.$model" name="phone" type="tel" id="phone" label="Телефон" class="input_phone"></FormInput>
          <Checkbox id="no-sms" name="no-sms" v-model="$v.noSMS.$model" value="no-sms"
                     label="Не отправлять СМС"></Checkbox>
        </div>
      </div>
      <h3>Пол</h3>
      <div class="input-group input-group_row input-group_condensed">
        <RadioButton v-model="$v.person.sex.$model" value="male" name="sex" id="sex-male" label="Мужской"></RadioButton>
        <RadioButton v-model="$v.person.sex.$model" value="female" name="sex" id="sex-female" label="Женский"></RadioButton>
      </div>
      <h2>Адрес</h2>
      <p class="hint">Укажите хотя бы город</p>
      <div class="input-group input-group_address">
        <div class="col">
          <FormInput v-model="$v.address.index.$model" name="index" id="index" label="Индекс"></FormInput>
          <FormInput v-model="$v.address.country.$model" name="country" id="country" label="Страна"></FormInput>
          <FormInput v-model="$v.address.district.$model" name="district" id="district" label="Область"></FormInput>
        </div>
        <div class="col">
          <FormInput required v-model="$v.address.city.$model" name="city" id="city" label="Город"></FormInput>
          <FormInput v-model="$v.address.street.$model" name="street" id="street" label="Улица"></FormInput>
          <FormInput v-model="$v.address.house.$model" name="house" id="house" label="Дом"></FormInput>
        </div>
      </div>
      <h2>Документ, удостоверяющий личность</h2>
      <div class="input-group input-group_document">
        <Select
            required
            v-model="$v.document.type.$model"
            label="Тип документа"
            name="doc-type"
            id="doc-type"
            :options="documentTypes">
        </Select>

        <FormInput v-model="$v.document.serial.$model" name="doc-serial" id="doc-serial" label="Серия и номер"></FormInput>
        <h3>Выдан</h3>
        <FormInput required v-model="$v.document.issueDate.$model" type="date" name="issue-date" id="issue-date"
                   label="Когда"></FormInput>
        <FormInput v-model="$v.document.issuedAt.$model" name="issued-at" id="issued-at" label="Кем"></FormInput>
      </div>
      <h2>Опции</h2>
      <p>Группа клиентов</p>
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

export default {
  name: 'ClientForm',
  components: {
    FormInput,
    Select,
    Checkbox,
    RadioButton
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
        startsWith: (value) => value.startsWith('7'),
        length: (value) => value.length === 11,
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
  },
}
</script>

<style scoped lang="scss">
@import "../../styles/common";
@import "../../styles/input-group";
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
}

.row {
  display: flex;
  column-gap: 1rem;
  align-items: flex-end;
}



//.input_birth, .input_phone {
//  max-width: calc(calc(100% - 2rem) / 3);
//  width: 100%;
//  @media (max-width: 700px) {
//    max-width: 100%;
//  }
//}
//
//.input_phone {
//  @media (max-width: 700px) {
//    max-width: 100%;
//  }
//}
</style>

