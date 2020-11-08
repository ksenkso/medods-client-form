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
@import "../../styles/mixins";
.button {
  border: none;
  cursor: pointer;
  background-color: $primary-color;
  border-radius: 3px;
  padding: .6em 1.2em;
  color: #ffffff;
  font-size: 1rem;
  transition: background-color .3s ease-in-out;
  &:disabled {
    background-color: lighten($primary-color, 30%);
  }

  &:focus, &:active {
    @include outline(2px);
    background-color: lighten($primary-color, 10%);
  }
}
</style>
