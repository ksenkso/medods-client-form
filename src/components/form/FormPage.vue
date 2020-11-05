<template>
  <div :class="pageClassName">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  props: {
    active: {
      type: Boolean,
    }
  },
  computed: {
    pageClassName() {
      return ['client-form__page', this.active && 'client-form__page_active'];
    }
  }
}
</script>

<style scoped>

</style>
