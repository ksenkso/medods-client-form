<template>
  <div class="client-form__page">
    <div class="col">
      <div class="input-group">
        <FormInput
            required
            :invalid="$v.lastName.$dirty && $v.lastName.$invalid"
            :value="$v.lastName.$model"
            @change="$v.lastName.$model = $event.trim()"
            name="last-name"
            id="last-name"
            label="Фамилия">
          <template slot="errors">
            <li class="error" v-if="$v.lastName.$dirty && !$v.lastName.required">Это поле обязательно</li>
          </template>
        </FormInput>
        <FormInput
            required
            :invalid="$v.firstName.$dirty && $v.firstName.$invalid"
            :value="$v.firstName.$model"
            @change="$v.firstName.$model = $event.trim()"
            name="first-name" id="first-name"
            label="Имя">
          <template slot="errors">
            <li class="error" v-if="$v.firstName.$dirty && !$v.firstName.required">Это поле обязательно
            </li>
          </template>
        </FormInput>
        <FormInput v-model.trim="$v.patronymic.$model" name="patronymic" id="patronymic"
                   label="Отчество (если есть)"></FormInput>
        <FormInput
            required
            :invalid="$v.dateOfBirth.$dirty && $v.dateOfBirth.$invalid"
            v-model="$v.dateOfBirth.$model"
            name="date-of-birth"
            type="date" id="date-of-birth"
            label="Дата рождения"
            class="input_birth"
        >
          <template slot="errors">
            <li class="error" v-if="$v.dateOfBirth.$dirty && !$v.dateOfBirth.required">Это поле
              обязательно
            </li>
          </template>
        </FormInput>
        <MaskedInput
            required
            hint="В формате 7(xxx)xxx-xx-xx"
            mask="7(___)___-__-__"
            :invalid="$v.phone.$dirty && $v.phone.$invalid"
            @change="$v.phone.$model = $event.trim()"
            @blur="$v.phone.$touch()"
            :value="$v.phone.$model"
            name="phone"
            type="tel"
            id="phone"
            label="Телефон"
            class="input_phone"
        >
          <template slot="errors">
            <li class="error" v-if="$v.phone.$dirty && !$v.phone.required">Это поле обязательно</li>
            <li class="error" v-if="$v.phone.$dirty && !$v.phone.startsWithSeven">Телефон должен быть в
              формате 7(xxx)xxx-xx-xx
            </li>
            <li class="error" v-if="$v.phone.$dirty && !$v.phone.length">Телефон должен содержать 11
              цифр
            </li>
          </template>
        </MaskedInput>
        <Checkbox id="no-sms" name="no-sms" v-model="$v.noSMS.$model" value="no-sms"
                  label="Не отправлять СМС"></Checkbox>
        <div class="options-group">
          <div class="options-group__name">Пол</div>
          <div class="input-group input-group_row input-group_condensed">
            <RadioButton v-model="$v.sex.$model" value="male" name="sex" id="sex-male"
                         label="Мужской"></RadioButton>
            <RadioButton v-model="$v.sex.$model" value="female" name="sex" id="sex-female"
                         label="Женский"></RadioButton>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/components/common/RadioButton.vue";
import Checkbox from "@/components/common/Checkbox.vue";
import MaskedInput from "@/components/common/MaskedInput.vue";
import FormInput from "@/components/common/FormInput.vue";
import {required} from "vuelidate/lib/validators";
import ClientFormPage from "@/mixins/ClientFormPage.js";

export default {
  name: "PagePatient",
  components: {
    RadioButton,
    Checkbox,
    MaskedInput,
    FormInput
  },
  mixins: [ClientFormPage],
  data() {
    return {
      lastName: '',
      firstName: '',
      patronymic: '',
      dateOfBirth: '',
      phone: '',
      sex: '',
      noSMS: false,
    }
  },
  validations: {
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
    noSMS: {},
  }
}
</script>

<style scoped>

</style>
