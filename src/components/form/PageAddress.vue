<template>
  <div class="client-form__page">
    <div class="col">
      <div class="input-group">
        <FormInput :style="{width: '128px'}" v-model.trim="$v.index.$model" name="index" id="index"
                   label="Индекс"></FormInput>
        <FormInput v-model.trim="$v.country.$model" name="country" id="country" label="Страна"></FormInput>
        <FormInput v-model.trim="$v.district.$model" name="district" id="district" label="Область"></FormInput>
        <FormInput required v-model.trim="$v.city.$model" name="city" id="city" label="Город">
          <template slot="errors">
            <li class="error" v-if="$v.city.$dirty && !$v.city.required">
              Это поле обязательно
            </li>
          </template>
        </FormInput>
        <FormInput v-model.trim="$v.street.$model" name="street" id="street" label="Улица"></FormInput>
        <FormInput :style="{width: '128px'}" v-model.trim="$v.house.$model" name="house" id="house"
                   label="Дом"></FormInput>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from "@/components/common/FormInput.vue";
import {validationMixin} from "vuelidate";
import ClientFormPage from "@/mixins/ClientFormPage.js";
import {required} from "vuelidate/lib/validators";

export default {
  name: "PageTwo",
  components: {
    FormInput
  },
  mixins: [validationMixin, ClientFormPage],
  data() {
    return {
      index: '',
      country: '',
      district: '',
      city: '',
      street: '',
      house: '',
    }
  },
  validations: {
    index: {},
    country: {},
    district: {},
    city: {
      required,
    },
    street: {},
    house: {},
  }
}
</script>

<style scoped lang="scss">
@media (min-width: 700px) {
  .input-group {
    width: 60%;
    .input {
      max-width: 100%;
    }
  }
}
</style>
