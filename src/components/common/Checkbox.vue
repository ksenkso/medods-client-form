<template>
  <div :class="className">
    <label :for="id" :class="labelClassName">
      {{ label }}
    </label>
    <input @change="onChange" :value="value" type="checkbox" :name="name" :id="id"
           :required="required" :class="inputClassName" :checked="isChecked" v-bind="$attrs">
    <ul class="input__errors">
      <slot name="errors"></slot>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'Checkbox',
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change',
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
    value: {},
    checked: {},
    checkedValue: {
      default: true,
    },
    uncheckedValue: {
      default: false,
    },
  },
  methods: {
    onChange(e) {
      if (Array.isArray(this.checked)) {
        if (this.isChecked) {
          this.$emit('change', this.checked.filter(entry => entry !== this.value));
        } else {
          this.$emit('change', this.checked.concat(this.value));
        }
      } else {
        this.$emit('change', e.target.checked ? this.checkedValue : this.uncheckedValue);
      }
    },
  },
  computed: {
    inputClassName() {
      return ['input__control', 'input__control_checkbox'];
    },
    labelClassName() {
      return ['input__label', this.required && 'input__label_required'];
    },
    className() {
      return ['input', `input_type-checkbox`]
    },
    isChecked() {
      if (Array.isArray(this.checked)) {
        return this.checked.includes(this.value);
      } else {
        return this.value === this.checked;
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../styles/input";
.input {
  &__control {
    &_checkbox {
      margin: 0 3px 0 0;
      padding: 0;

    }
  }
}
</style>
