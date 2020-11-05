<template>
  <div class="client-form__page">
    <div class="col">
      <h2>Документ, удостоверяющий личность</h2>
      <div class="input-group input-group_document">
        <Select
            required
            v-model="$v .type.$model"
            label="Тип документа"
            name="doc-type"
            id="doc-type"
            :options="documentTypes">
          <template slot="errors">
            <li class="error" v-if="$v.type.$dirty && !$v.type.required">Это поле обязательно</li>
          </template>
        </Select>

        <FormInput v-model.trim="$v.serial.$model" name="doc-serial" id="doc-serial"
                   label="Серия и номер"></FormInput>
        <FormInput required v-model="$v.issueDate.$model" type="date" name="issue-date" id="issue-date"
                   label="Когда выдан">
          <template slot="errors">
            <li class="error" v-if="$v.issuedAt.$dirty && !$v.issuedAt.required">Это поле
              обязательно
            </li>
          </template>
        </FormInput>
        <FormInput v-model.trim="$v.issuedAt.$model" name="issued-at" id="issued-at"
                   label="Кем выдан"></FormInput>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/common/FormInput.vue";
import Select from "@/components/common/Select.vue";
import {required} from "vuelidate/lib/validators";
import {validationMixin} from "vuelidate";
import ClientFormPage from "@/mixins/ClientFormPage.js";

export default {
  name: "PageDocument",
  components: {
    FormInput,
    Select,
  },
  mixins: [validationMixin, ClientFormPage],
  data() {
    return {
      type: 'passport',
      serial: '',
      issuedAt: '',
      issueDate: '',
      documentTypes: [
        {value: 'passport', text: 'Паспорт'},
        {value: 'birth-certificate', text: 'Свидетельство о рождении'},
        {value: 'driver-license', text: 'Вод. удостоверение'},
      ],
    }
  },
  validations: {
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
  }
}
</script>

<style scoped>

</style>
