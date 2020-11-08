<template>
  <div :class="className">
    <label :for="id" :class="labelClassName">
      {{ label }}
    </label>
    <input @change="onChange" :value="value" type="radio" :name="name" :id="id"
           :required="required" :class="inputClassName" :checked="isChecked">
    <ul class="input__errors">
      <slot name="errors"></slot>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'RadioButton',
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
    },
    label: {
      type: String,
      required: true,
    },
    value: {

    },
    checked: {

    }
  },
  methods: {
    onChange() {
      if (Array.isArray(this.checked)) {
        if (this.isChecked) {
          this.$emit('change', this.checked.filter(entry => entry !== this.value));
        } else {
          this.$emit('change', this.checked.concat(this.value));
        }
      } else {
        this.$emit('change', this.value);
      }
    }
  },
  computed: {
    inputClassName() {
      return ['input__control', 'input__control_radio'];
    },
    labelClassName() {
      return ['input__label', this.required && 'input__label_required'];
    },
    className() {
      return ['input', `input_type-radio`]
    },
    isChecked() {
      if (Array.isArray(this.checked)) {
        return this.checked.includes(this.value);
      } else {
        return this.value === this.checked;
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../styles/input";
.input {
  &__control {
    &_radio {
      margin: 0 3px 0 0;
      padding: 0;
    }
  }
}
</style>
