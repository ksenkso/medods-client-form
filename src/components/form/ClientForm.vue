<template>
  <div class="client-form">
    <div class="client-form__header">
      <h1>Добавление клиента</h1>
    </div>
    <form action="#" @submit.prevent="onSubmit">
      <h2>Пациент</h2>
      <div class="input-group input-group_fio">
        <FormInput required v-model="$v.person.lastName.$model" name="last-name" id="last-name"
                   label="Фамилия"></FormInput>
        <FormInput required v-model="$v.person.firstName.$model" name="first-name" id="first-name"
                   label="Имя"></FormInput>
        <FormInput v-model="person.patronymic" name="patronymic" id="patronymic" label="Отчество"></FormInput>
      </div>
      <div class="input-group">
        <FormInput v-model="person.dateOfBirth" name="date-of-birth" type="date" id="date-of-birth"
                   label="Дата рождения"></FormInput>
        <div class="input-group input-group_row">
          <FormInput v-model="person.phone" name="phone" type="tel" id="phone" label="Телефон"></FormInput>
          <FormInput type="checkbox" id="no-sms" name="no-sms" v-model="medical.noSMS"
                     label="Не отправлять СМС"></FormInput>
        </div>
      </div>
      <h3>Пол</h3>
      <div class="input-group input-group_row">
        <FormInput v-model="person.sex" name="sex" type="radio" id="sex-male" label="Мужской"></FormInput>
        <FormInput v-model="person.sex" name="sex" type="radio" id="sex-female" label="Женский"></FormInput>
      </div>
      <h2>Адрес</h2>
      <p class="hint">Укажите хотя бы город</p>
      <div class="input-group">
        <FormInput v-model="address.index" name="index" id="index" label="Индекс"></FormInput>
        <FormInput v-model="address.country" name="country" id="country" label="Страна"></FormInput>
        <FormInput v-model="address.district" name="district" id="district" label="Область"></FormInput>
        <FormInput required v-model="$v.address.city.$model" name="city" id="city" label="Город"></FormInput>
        <FormInput v-model="address.street" name="street" id="street" label="Улица"></FormInput>
        <FormInput v-model="address.house" name="house" id="house" label="Дом"></FormInput>
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

        <FormInput v-model="document.serial" name="doc-serial" id="doc-serial" label="Серия и номер"></FormInput>
        <h3>Выдан</h3>
        <FormInput required v-model="document.issueDate" type="date" name="issue-date" id="issue-date"
                   label="Когда"></FormInput>
        <FormInput v-model="document.issuedAt" name="issued-at" id="issued-at" label="Кем"></FormInput>
      </div>
      <h2>Опции</h2>
      <h3>Группа клиентов</h3>
      <div class="input-group input-group_list">
        <FormInput name="medical-group" id="group-vip" type="checkbox" label="VIP"></FormInput>
        <FormInput name="medical-group" id="group-vip" type="checkbox" label="Проблемные"></FormInput>
        <FormInput name="medical-group" id="group-vip" type="checkbox" label="ОМС"></FormInput>
      </div>
      <Select
          v-model="medical.doctor"
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

export default {
  name: 'ClientForm',
  components: {
    FormInput,
    Select,
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
        noSMS: false,
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
      dateOfBirth: {
        required,
      },
      phone: {
        required,
        startsWith: (value) => value.startsWith('7'),
        length: (value) => value.length === 11,
      },
    },
    medical: {
      group: {
        required,
      },
    },
    address: {
      city: {
        required,
      },
    },
    document: {
      type: {
        required,
      },
      issueDate: {
        required,
      },
    },

  },
}
</script>

<style scoped lang="scss">
.client-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
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

.input-group {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-bottom: 1rem;
  .input-group {
    margin-bottom: 0;
  }

  &_fio {
    flex-direction: row;
    column-gap: 1rem;

    .input {
      flex: 1 1 100%
    }

    margin-bottom: 1rem;
  }

  &_document {
    h3 {
      margin: 0;
    }
  }

  &_row {
    flex-direction: row;
    column-gap: 1rem;
    align-items: flex-end;
  }

  &_list {
    row-gap: .5rem;
  }
}
</style>

