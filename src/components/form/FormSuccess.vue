<template>
  <div class="client-form__success">
    Клиент добавлен!
    <Button @click="$emit('reset')">Добавить нового клиента</Button>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";

export default {
  name: "FormSuccess",
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
</style>
