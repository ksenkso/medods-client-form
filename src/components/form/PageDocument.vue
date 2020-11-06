<template>
  <div class="client-form__page">
    <div class="col">
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
        <div class="row">
          <FormInput :style="{width: '100px'}" v-model.trim="$v.series.$model" name="doc-series" id="doc-series"
                     label="Серия"></FormInput>
          <FormInput v-model.trim="$v.number.$model" name="doc-number" id="doc-number"
                     label="Номер"></FormInput>
        </div>
        <FormInput required v-model="$v.issueDate.$model" type="date" name="issue-date" id="issue-date"
                   label="Когда выдан">
          <template slot="errors">
            <li class="error" v-if="$v.issueDate.$dirty && !$v.issueDate.required">Это поле
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
      series: '',
      number: '',
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
    series: {},
    number: {}
  }
}
</script>

<style scoped>

</style>
