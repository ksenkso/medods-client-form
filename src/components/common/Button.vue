<template>
  <component :is="tag" :class="className" :type="type" v-on="$listeners">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: 'button'
    },
    tag: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    className() {
      return ['button']
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/variables";
.button {
  border: none;
  cursor: pointer;
  background-color: $primary-color;
  border-radius: 3px;
  outline-color: transparentize($primary-color, .3);
  padding: .6em 1.2em;
  color: #ffffff;
  font-size: 1rem;
}
</style>
