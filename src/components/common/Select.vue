<template>
  <div class="input">
    <label :for="id" :class="labelClassName">
      {{ label }}
    </label>
    <select :value="value" :name="name" :id="id" @change="$emit('change', $event.target.value)" :class="className"
            v-bind="$attrs">
      <option v-for="(option, i) in options" :key="i" :value="option.value">{{ option.text }}</option>
    </select>
    <div class="input__hint">{{ hint }}</div>
    <ul class="input__errors">
      <slot name="errors"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Select',
  inheritAttrs: false,
  model: {
    prop: 'value',
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
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {},
    required: {
      type: Boolean,
    },
    hint: {
      type: String,
    }
  },
  computed: {
    className() {
      return ['input__control', 'input__control_select']
    },
    labelClassName() {
      return ['input__label', this.required && 'input__label_required'];
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../styles/input";

.input {
  &__control {
    &_select {
      min-height: 30px;
    }
  }
}
</style>
