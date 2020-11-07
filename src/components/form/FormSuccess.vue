<template>
  <div class="client-form__success">
    <div class="client-form__result form-result">
      <PatientView v-if="data.PagePatient" :data="data.PagePatient"></PatientView>
      <AddressView v-if="data.PageAddress" :data="data.PageAddress"></AddressView>
      <DocumentView v-if="data.PageDocument" :data="data.PageDocument"></DocumentView>
      <AdditionalInfoView v-if="data.PageMedical" :data="data.PageMedical"></AdditionalInfoView>
    </div>
    <Button @click="$emit('reset')">Добавить нового клиента</Button>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import PatientView from "@/components/form/views/PatientView.vue";
import AddressView from "@/components/form/views/AddressView.vue";
import DocumentView from "@/components/form/views/DocumentView.vue";
import AdditionalInfoView from "@/components/form/views/AdditionalInfoView.vue";

export default {
  name: "FormSuccess",
  components: {
    AdditionalInfoView,
    DocumentView,
    AddressView,
    PatientView,
    Button
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
</style>
