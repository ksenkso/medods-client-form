<template>
  <div class="form-progress">
    <div :class="indicatorClass">
      <svg viewBox="0 0 64 64" class="indicator__container">
        <g class="indicator__circles">
          <circle
              :class="getCircleClass(index)"
              v-for="(step, index) in steps"
              :key="index"
              :style="getCircleStyle(index)"
              :r="circleRadius"
              cx="32"
              cy="32">
          </circle>
          <circle
              v-if="!complete"
              class="indicator__mask"
              :r="circleRadius"
              :style="maskStyle"
              cx="32"
              cy="32">
          </circle>
          <circle
              class="indicator__active"
              :r="circleRadius"
              :style="activeStyle"
              cx="32"
              cy="32" >
          </circle>
        </g>
        <path class="indicator__mark" d="M 16,32 L 32 46 50 21" stroke="green" fill="none" stroke-width="4"></path>
        <text class="indicator__text" x="32" y="36" text-anchor="middle" v-if="!complete">{{ active + 1 }} из {{ steps.length }}</text>
      </svg>
    </div>
    <ul class="form-progress__steps" v-if="!complete">
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
  data() {
    return {
      circleRadius: 28,
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
    getCircleStyle(index) {
      const length = Math.PI * 2 * this.circleRadius;
      return {
        'stroke-dasharray': length,
        'stroke-dashoffset': length * (1 / this.steps.length) * index,
      };
    },
    getCircleClass(index) {
      return [
        'indicator__circle',
        this.errors.has(index) && 'indicator__circle_error',
        this.valid.has(index) && 'indicator__circle_valid'
      ]
    },
    goTo(index) {
      this.$emit('navigate', index);
    }
  },
  computed: {
    circumference() {
      return Math.PI * 2 * this.circleRadius
    },
    maskStyle() {
      return {
        'stroke-dasharray': this.circumference,
        'stroke-dashoffset': this.circumference * (1 / this.steps.length) *  (this.active + 1),
      }
    },
    activeStyle() {
      const angle = Math.PI * 2 / this.steps.length;
      return {
        'stroke-dasharray': this.circumference,
        'stroke-dashoffset': this.complete ? this.circumference : this.circumference * (1 - 1 / this.steps.length),
        transform: `rotateZ(${-this.active * angle}rad) rotateX(180deg)`,
      }
    },
    indicatorClass() {
      return ['indicator', this.complete && 'indicator_complete'];
    },
    complete() {
      return this.active >= this.steps.length;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.form-progress {
  position: relative;
  margin-bottom: 2rem;

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

  @media (max-width: 700px) {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    column-gap: 1rem;
    &::after {
      display: none;
    }
  }

  &__steps {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    @media (max-width: 700px) {
      justify-content: flex-end;
      flex-direction: column;
      transition: opacity .3s ease-in-out;
    }
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
      color: lighten($valid-color, 5%);
      &::after {
        background: lighten($valid-color, 10%);
      }
    }

    &_error {
      color: lighten($error-color, 5%);
      &::after {
        background: lighten($error-color, 10%);
      }
    }

    &_active {
      font-weight: bold;
      color: lighten($primary-color, 10%);
      &::after {
        background: lighten($primary-color, 20%);
      }
    }

    @media (max-width: 700px) {
      display: none;
      &::after {
        display: none;
      }
      &_active {
        display: block;
        font-size: 1.6rem;
        font-weight: bold;
      }
      &_active + .form-progress__step {
        display: block;

        &::before {
          content: 'Далее: ';
        }
      }
    }
  }
}

.indicator {
  position: relative;
  left: 0;
  transition: .3s ease-in-out;
  transition-property: left, transform;
  width: 100px;
  height: 100px;
  background-color: #fff;
  z-index: 1;
  text {
    font-size: .8rem;
  }
  @media (min-width: 700px) {
    display: none;
  }
  &__mark {
    opacity: 0;
    transition: opacity .3s ease-in-out;
  }
  &_complete {
    left: 50%;
    transform: translateX(-50%);
    .indicator__mark {
      opacity: 1;
    }
    + .form-progress__steps {
      opacity: 0;
    }
    .indicator__text {
      opacity: 0;
    }
  }
  &__text {
    transition: opacity .15s ease-in-out;
  }
  &__circles {
    transform-origin: 50% 50%;
    transform: rotateY(180deg) rotateZ(-90deg);
  }

  &__circle {
    fill: none;
    stroke: #cccccc;
    stroke-width: 6px;
    transition: stroke .3s ease-in-out;
    &_valid {
      stroke: lighten($valid-color, 10%);
    }

    &_error {
      stroke: lighten($error-color, 10%);
    }
  }
  &__mask {
    fill: none;
    stroke: #cccccc;
    stroke-width: 7px;
    transition: stroke-dashoffset .3s ease-in-out;
  }

  &__active {
    fill: none;
    stroke: lighten($primary-color, 20%);
    stroke-width: 6px;
    transition: .3s ease-in-out;
    transition-property: transform, stroke-dashoffset;
    transform-origin: center;
  }
  
  
}
</style>
