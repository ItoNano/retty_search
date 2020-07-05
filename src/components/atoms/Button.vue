<template>
  <button class="button-component" :class="['button-' + type]" :style="buttonStyle" @click="click">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    fontSize: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      buttonStyle: {
        height: this.height,
        width: this.width,
        fontSize: this.fontSize,
      },
    }
  },
  methods: {
    click() {
      this.$emit('click', event)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.button-component {
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  box-sizing: border-box;
  outline: none;
  padding: 4px;
  &:hover {
    cursor: pointer;
  }
}

.button {
  &-main {
    color: $blank;
    background-color: $main;
  }
  &-sub {
    color: $blank;
    background-color: $sub;
  }
  &-caution {
    color: $blank;
    background-color: $caution;
  }
}
</style>
