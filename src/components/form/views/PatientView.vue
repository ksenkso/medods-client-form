<template>
  <div class="result-view">
    <h2>Пациент</h2>
    <ResultField label="ФИО" :value="fio"></ResultField>
    <ResultField label="Телефон" :value="data.phone"></ResultField>
    <ResultField label="Не отправлять СМС" checkbox></ResultField>
    <ResultField label="Дата рождения" :value="data.dateOfBirth"></ResultField>
    <ResultField label="Пол" :value="sex"></ResultField>
  </div>
</template>

<script>
import ResultField from "@/components/form/views/ResultField.vue";
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
    }
  }
}
</script>

<style scoped>

</style>
