<template>
  <FormInput
      ref="input"
      @input="onInput"
      @change="onChange"
      :value="maskedValue"
      :name="name"
      :id="id"
      :type="type"
      :label="label"
      v-bind="$attrs">
    <template slot="errors">
      <slot name="errors"></slot>
    </template>
    <slot></slot>
  </FormInput>
</template>

<script>
import FormInput from '@/components/common/FormInput.vue';

function applyMask(data, mask) {
  let result = '';
  let inpIndex = 0;
  for (let i = 0; i < mask.length; i++) {
    if (inpIndex >= data.length) {
      break;

    }
    if (mask[i] === '_') {
      if (data[inpIndex].match(/[0-9]/)) {
        result += data[inpIndex++];
      } else {
        break;
      }
    } else {
      result += mask[i];
      if (mask[i] === data[inpIndex]) {
        inpIndex++;
      }
    }
  }
  return result;
}

export default {
  name: 'MaskedInput',
  components: {
    FormInput,
  },
  props: {
    mask: {
      type: String,
      required: true,
    },
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
    value: {
      type: String,
    },
  },
  data() {
    return {
      maskedValue: applyMask(this.value, this.mask),
      lol: true,
    }
  },
  methods: {
    onInput(value) {
      this.applyMask(value);
      this.$emit('input', this.maskedValue);
    },
    onChange(value) {
      this.applyMask(value);
      this.$emit('change', this.maskedValue);
    },
    applyMask(value) {
      this.maskedValue = applyMask(value, this.mask);
      this.$refs.input.$forceUpdate();
    }
  },
  watch: {
    value(newValue) {
      this.maskedValue = applyMask(newValue, this.mask);
    }
  }
}
</script>

<style scoped>

</style>
