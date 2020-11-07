<template>
  <div class="result-view">
    <h2>Адрес</h2>
    {{ fullAddress }}
  </div>
</template>

<script>

export default {
  name: "AddressView",
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  computed: {
    fullAddress() {
      return [
        this.data.index,
        this.data.country,
        this.data.district,
        this.data.city,
        this.data.street,
        this.data.house
      ]
          .map(value => value.trim())
          .filter(Boolean)
          .join(', ').replace(/\s+/g, ' ').trim()
    }
  }
}
</script>

<style scoped>

</style>
