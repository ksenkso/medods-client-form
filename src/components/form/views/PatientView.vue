<template>
  <div class="result-view">
    <h2>Пациент</h2>
    <ResultField label="ФИО" :value="fio"></ResultField>
    <ResultField label="Телефон" :value="data.phone"></ResultField>
    <ResultField label="Не отправлять СМС" checkbox v-if="data.noSMS"></ResultField>
    <ResultField label="Дата рождения" :value="dateOfBirth"></ResultField>
    <ResultField label="Пол" :value="sex"></ResultField>
  </div>
</template>

<script>
import ResultField from "@/components/form/views/ResultField.vue";
import {formatDate} from "@/utils.js";
export default {
  name: "PatientView",
  components: {ResultField},
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  computed: {
    fio() {
      return [this.data.lastName, this.data.firstName, this.data.patronymic].join(' ').trim();
    },
    sex() {
      switch (this.data.sex) {
        case 'male': {
          return 'Мужской';
        }
        case 'female': {
          return 'Женский';
        }
        default: {
          return 'Не указан'
        }
      }
    },
    dateOfBirth() {
      return this.data.dateOfBirth ? formatDate(this.data.dateOfBirth) : 'Не указано';
    }
  }
}
</script>

<style scoped>

</style>
