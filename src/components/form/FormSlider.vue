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
      width: 0,
    }
  },
  methods: {
    movePage(amount) {
      const nextPage = this.page + amount;
      if (nextPage >= 0 && nextPage < this.pagesCount) {
        this.page = nextPage;
        this.reactivateFocus()
        this.$emit('slide-change', this.page);
      }
    },
    reactivateFocus() {
      this.$slots.default.forEach((page, index) => {
        console.log(page)
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
    updateWidth() {
      this.width = this.$refs.content ? this.$refs.content.clientWidth : 0;
    }
  },
  computed: {
    pagesCount() {
      return this.$slots.default ? this.$slots.default.length : 0;
    },
    contentStyle() {
      return {
        transform: `translateX(-${this.page * this.width}px)`
      }
    },
  },
  mounted() {
    this.updateWidth();
    this.reactivateFocus();
    window.addEventListener('resize', this.updateWidth);
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.form-slider {
  width: 100%;
  //display: flex;
  //align-items: center;
  //column-gap: 1rem;
  &__nav {
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
    transition: transform .3s ease-in-out;
    display: flex;
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
