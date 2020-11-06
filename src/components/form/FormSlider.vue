<template>
  <div class="form-slider">
    <div ref="content" class="form-slider__content">
      <div ref="inner" class="form-slider__inner" :style="contentStyle" @transitionend="focusFirst">
        <slot></slot>
        <div :class="successPageClass">
          <slot name="success-page"></slot>
        </div>
      </div>
    </div>
    <div class="form-slider__nav" v-if="showNavigation">
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
      showSuccessPage: false,
    }
  },
  props: {
    adaptiveHeight: Boolean,
    showNavigation: Boolean,
  },
  methods: {
    movePage(amount) {
      const nextPage = this.page + amount;
      this.navigate(nextPage);
    },
    toSuccessPage() {
      this.showSuccessPage = true;
      this.navigateUnsafe(this.pagesCount);
    },
    reset() {
      this.showSuccessPage = false;
      this.$slots.default.forEach(vNode => {
        const v = vNode.componentInstance.getValidator();
        v.$reset();
      });
      this.navigate(0);
    },
    /**
     * 1. touch fields on current page
     * 2. wait for layout shifts
     * 3. update slide width
     * 4. go to the next slide
     */
    navigate(index) {
      if (this.validIndex(this.page)) {
        const v = this.$slots.default[this.page].componentInstance.getValidator();
        v.$touch();
      }
      if (this.validIndex(index)) {
        this.navigateUnsafe(index)
      }
    },
    navigateUnsafe(index) {
      this.$nextTick(() => {
        this.page = index;
        if (this.adaptiveHeight) {
          this.updateHeight();
        }
        this.reactivateFocus();
        this.$emit('slide-change', this.page);
      });
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
      // if there is an error on the page, focus on it instead of focusing on the first input
      if (this.validIndex(this.page)) {
        const v = this.$slots.default[this.page].componentInstance.getValidator();
        if (v.$anyError) {
          this.$slots.default[this.page].componentInstance.$el.querySelectorAll('.input_invalid .input__control')
              .item(0)
              .focus();
        } else {
          this.$slots.default[this.page].componentInstance.$el.querySelectorAll('input, a, button, select')
              .item(0)
              .focus();
        }
      }
    },
    updateHeight() {
      this.height = `${this.$refs.inner.children.item(this.page).clientHeight}px`;
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
    successPageClass() {
      return ['client-form__page', 'success-page', this.showSuccessPage && 'success-page_visible'];
    }
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
  .success-page {
    visibility: hidden;
    &_visible {
      visibility: visible;
    }
  }
}
</style>
