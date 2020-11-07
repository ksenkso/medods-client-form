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
  padding: .6em 1.2em;
  color: #ffffff;
  font-size: 1rem;
  &:disabled {
    background-color: lighten($primary-color, 30%);
  }

  &:focus, &:active {
    outline: 2px revert $primary-color;
    outline-offset: 2px;
    background-color: darken($primary-color, 10%);
  }
}
</style>
