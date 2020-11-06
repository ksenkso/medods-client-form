<template>
  <div class="form-slider">
    <div ref="content" class="form-slider__content">
      <div class="form-slider__inner" :style="contentStyle" @transitionend="focusFirst">
        <slot></slot>
      </div>
    </div>
    <div class="form-slider__nav">
      <Button
          :disabled="page === 0"
          class="form-slider__button form-slider__button_prev"
          @click="movePage(-1)">Назад
      </Button>
      <Button
          :disabled="page === pagesCount - 1"
          class="form-slider__button form-slider__button_next"
          @click="movePage(1)">Вперёд
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";

export default {
  name: "FormSlider",
  components: {
    Button
  },
  data() {
    return {
      page: 0,
      height: 'auto',
    }
  },
  props: {
    adaptiveHeight: Boolean,
  },
  methods: {
    movePage(amount) {
      const nextPage = this.page + amount;
      this.navigate(nextPage);
    },
    navigate(index) {
      if (this.validIndex(index)) {
        const v = this.$slots.default[this.page].componentInstance.getErrors();
        /**
         * 1. touch fields
         * 2. wait for layout shifts
         * 3. update slide width
         * 4. go to the next slide
         */
        v.$touch();
        this.$nextTick(() => {
          this.page = index;
          if (this.adaptiveHeight) {
            this.updateHeight();
          }
          this.reactivateFocus();
          this.$emit('slide-change', this.page);
        });
      }
    },
    validIndex(index) {
      return index >= 0 && index < this.pagesCount
    },
    reactivateFocus() {
      this.$slots.default.forEach((page, index) => {
        const controls = Array.from(page.componentInstance.$el.querySelectorAll('input, a, button, select'));
        if (index !== this.page) {
          controls.forEach(control => {
            control.tabIndex = -1;
          })
        } else {
          controls.forEach(control => {
            control.tabIndex = 1;
          });
        }
      })
    },
    focusFirst() {
      // we cannot control where in the dom the first component will be, so we need to use DOM API to focus on it
      this.$slots.default[this.page].componentInstance.$el.querySelectorAll('input, a, button, select')
        .item(0)
        .focus();
    },
    updateHeight() {
      this.height = `${this.$slots.default[this.page].componentInstance.$el.clientHeight}px`;
    },

  },
  computed: {
    pagesCount() {
      return this.$slots.default ? this.$slots.default.length : 0;
    },
    contentStyle() {
      const style = {
        transform: `translateX(-${this.page * 100}%)`,
      }
      if (this.adaptiveHeight) {
        style.height = this.height;
      }
      return style;
    },
  },
  mounted() {
    this.updateHeight();
    this.reactivateFocus();
    window.addEventListener('resize', this.updateHeight);
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.form-slider {
  width: 100%;
  &__nav {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
    column-gap: 1rem;
  }

  &__content {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  &__inner {
    transition: .3s ease-in-out;
    transition-property: height, transform;
    display: flex;
    align-items: flex-start;

  }

  &__button {
    cursor: pointer;
    background-color: $primary-color;
    color: #ffffff;
    font-weight: bold;
    border: none;
    font-size: 1rem;

    &:disabled {
      background-color: lighten($primary-color, 30%);
    }

    &:focus, &:active {
      outline: none;
      background-color: lighten($primary-color, 10%);
    }
  }
}
</style>
