<template>
  <div class="result-view">
    <h2>Дополнительно</h2>
    <ResultField label="Группа клиентов" v-if="medical.groupsLoaded" :value="group"></ResultField>
    <ResultField label="Лечащий врач" v-if="medical.doctorsLoaded" :value="doctor"></ResultField>
  </div>
</template>

<script>
import ResultField from "@/components/form/views/ResultField.vue";
import medicalInfoLoader from "@/mixins/medicalInfoLoader.js";

export default {
  name: "AdditionalInfoView",
  components: {ResultField},
  mixins: [medicalInfoLoader],
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  computed: {
    group() {
      const groups = this.data.group || [];
      return groups.length
          ? groups.map(type => this.medical.groups[type]).join(', ')
          : '';
    },
    doctor() {
      return this.data.doctor ? this.medical.doctors[this.data.doctor] : '';
    }
  }
}
</script>

<style scoped>

</style>
