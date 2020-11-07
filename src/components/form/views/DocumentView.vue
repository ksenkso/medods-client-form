<template>
  <div class="result-view">
    <h2>Документ</h2>
    <ResultField label="Тип документа" :value="documentType"></ResultField>
    <ResultField label="Кем выдан" :value="data.issuedAt"></ResultField>
    <ResultField label="Когда выдан" :value="data.issueDate"></ResultField>
    <ResultField label="Серия и номер" :value="id"></ResultField>
  </div>
</template>

<script>
import ResultField from "@/components/form/views/ResultField.vue";
export default {
  name: "DocumentView",
  components: {ResultField},
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  computed: {
    id() {
      return [this.data.series, this.data.number].join(' ').trim();
    },
    documentType() {
      switch (this.data.type) {
        case 'passport': {
          return 'Паспорт';
        }
        case 'birth-certificate': {
          return 'Паспорт';
        }
        case 'driver-license': {
          return 'Паспорт';
        }
        default: {
          return '';
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
