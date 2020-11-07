<template>
  <div :class="inputClassName">
    <label :for="id" :class="labelClassName">
      {{ label }}
    </label>
    <input
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event.target.value)"
        v-bind="$attrs"
        :value="value"
        :type="type"
        :name="name"
        :id="id"
        :required="required"
        :class="className"
    >
    <div class="input__hint">{{hint}}</div>
    <ul class="input__errors">
      <slot name="errors"></slot>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'FormInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
    },
    value: {},
    hint: {
      type: String,
    },
    invalid: {
      type: Boolean,
    }
  },
  computed: {
    className() {
      return ['input__control'];
    },
    labelClassName() {
      return ['input__label', this.required && 'input__label_required'];
    },
    inputClassName() {
      return ['input', `input_type-${this.type}`, this.invalid && 'input_invalid']
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../styles/input";
/*.input {
  &_type {
    &-radio, &-checkbox {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  }
  &__control {
    &[type=checkbox], &[type=radio] {
      order: 1
    }
  }
}*/
</style>
