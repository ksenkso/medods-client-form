<template>
  <div class="client-form__page">
    <div class="col">
      <div class="options-group" v-if="medical.groupsLoaded">
        <div class="options-group__name">Группа клиентов</div>
        <Checkbox
            tabindex="-1"
            v-model="$v.group.$model"
            v-for="(text, value) in medical.groups"
            :key="value"
            :value="value"
            name="medical-group"
            id="group-vip"
            :label="text">
        </Checkbox>
      </div>
      <Select
          tabindex="-1"
          v-if="medical.doctorsLoaded"
          v-model="$v.doctor.$model"
          label="Лечащий врач"
          name="doctor"
          id="doctor"
          :options="doctors">
      </Select>
      <Button class="client-form__submit" type="submit">Добавить клиента</Button>
    </div>
  </div>
</template>

<script>
import Select from "@/components/common/Select.vue";
import Button from "@/components/common/Button.vue";
import Checkbox from "@/components/common/Checkbox.vue";
import ClientFormPage from "@/mixins/ClientFormPage.js";
import medicalInfoLoader from "@/mixins/medicalInfoLoader.js";

export default {
  name: "PageMedical",
  components: {
    Select,
    Button,
    Checkbox
  },
  mixins: [ClientFormPage, medicalInfoLoader],
  data() {
    return {
      group: [],
      doctor: null,
      groupsLoaded: false,
      doctorsLoaded: false,
    }
  },
  computed: {
    doctors() {
      return [{value: '', text: 'Выберите врача'}].concat(
          Object.keys(this.medical.doctors).map(value => ({value, text: this.medical.doctors[value]}))
      );
    }
  },
  validations: {
    group: {},
    doctor: {},
  }
}
</script>

<style scoped>

</style>
