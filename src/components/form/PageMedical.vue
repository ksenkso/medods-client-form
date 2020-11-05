<template>
  <div class="client-form__page">
    <div class="col">
      <h2 class="input-group__title">Опции</h2>
      <div class="options-group">
        <div class="options-group__name">Группа клиентов</div>
        <Checkbox v-model="$v.group.$model" value="vip" name="medical-group" id="group-vip"
                  label="VIP"></Checkbox>
        <Checkbox v-model="$v.group.$model" value="problem" name="medical-group" id="group-problem"
                  label="Проблемные"></Checkbox>
        <Checkbox v-model="$v.group.$model" value="oms" name="medical-group" id="group-oms"
                  label="ОМС"></Checkbox>
      </div>
      <div class="input-group input-group_list">

      </div>
      <Select
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
import {required} from "vuelidate/lib/validators";
import {validationMixin} from "vuelidate";
import ClientFormPage from "@/mixins/ClientFormPage.js";

export default {
  name: "PageMedical",
  components: {
    Select,
    Button,
    Checkbox
  },
  mixins: [validationMixin, ClientFormPage],
  data() {
    return {
      group: [],
      doctor: null,
      doctors: [
        {value: '1', text: 'Иванов'},
        {value: '2', text: 'Захаров'},
        {value: '3', text: 'Чернышева'},
      ],
    }
  },
  validations: {
    group: {
      required,
    },
    doctor: {},
  }
}
</script>

<style scoped>

</style>
