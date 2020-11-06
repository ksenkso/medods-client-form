<template>
  <div class="form-progress">
    <div class="form-progress__indicator indicator">
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

        <text x="32" y="36" text-anchor="middle">{{ active + 1 }} из {{ steps.length }}</text>
      </svg>
    </div>
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
        'stroke-dashoffset': this.circumference * (1 - 1 / this.steps.length),
        transform: `rotateZ(${-this.active * angle}rad) rotateX(180deg)`,
      }
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
      &::after {
        background: lighten($valid-color, 10%);
      }
    }

    &_error {
      &::after {
        background: lighten($error-color, 10%);
      }
    }

    &_active {
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
  width: 100px;
  height: 100px;
  text {
    font-size: .8rem;
  }
  @media (min-width: 700px) {
    display: none;
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
    transition: transform .3s ease-in-out;
    transform-origin: center;
  }
}
</style>
