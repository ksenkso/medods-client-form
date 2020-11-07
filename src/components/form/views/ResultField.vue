<template>
  <div class="result-view__field">
    <div class="result-view__label">{{ label }}</div>
    <div v-if="!checkbox" class="result-view__value">{{ filteredValue }}</div>
  </div>
</template>

<script>
export default {
  name: "ResultField",
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    emptyValue: {
      type: String,
      default: 'Не указано'
    },
    checkbox: {
      type: Boolean,
    }
  },
  computed: {
    filteredValue() {
      const v = this.value.trim();
      return v || this.emptyValue;
    }
  }
}
</script>

<style scoped lang="scss">
.result-view {
  &__field {
    margin-bottom: 1rem;
  }
  &__label {
    font-weight: bold;
    margin-bottom: .25rem;
  }
  &__value {

  }

}
</style>
