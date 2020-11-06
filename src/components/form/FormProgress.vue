<template>
  <div class="form-progress">
    <ul class="form-progress__steps">
      <li
          @click="goTo(index)"
          :class="getStepClass(index)"
          v-for="(step, index) in steps"
          :key="index">{{ step }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FormProgress",
  props: {
    steps: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      default: 0
    },
    errors: {
      type: Set,
      required: true
    },
    valid: {
      type: Set,
      required: true,
    }
  },
  methods: {
    getStepClass(index) {
      return [
        'form-progress__step',
        index === this.active && 'form-progress__step_active',
        this.errors.has(index) && 'form-progress__step_error',
        this.valid.has(index) && 'form-progress__step_valid'
      ];
    },
    goTo(index) {
      this.$emit('navigate', index);
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/variables";
.form-progress {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    border-bottom: 1px solid #cccccc;
    height: 0;
    z-index: -1;
  }
  &__steps {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
  &__step {
    background-color: #fff;
    padding: .5rem;
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
      width: 10px;
      height: 10px;
      background-color: #ccc;
      border-radius: 50%;
      transition: background-color .1s ease-in-out;
    }
    &_valid {
      &::after {
        background: transparentize($valid-color, .3);
      }
    }
    &_error {
      &::after {
        background: transparentize($error-color, .3);
      }
    }
    &_active {
      &::after {
        background: transparentize($primary-color, .3);
      }
    }
  }
}
</style>
