<template>
  <div>
    <input class="text-field" :type="type" :style="textFieldSize" :value="value" :placeholder="placeholder" @input="updateValue" @keydown.enter="enterText" />
    <div v-if="validationMessage !== ''" class="validation-message">{{ validationMessage }}</div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
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
    placeholder: {
      type: String,
      default: '',
    },
    validationMessage: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      textFieldSize: {
        height: this.height,
        width: this.width,
      },
    }
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value)
    },
    enterText(e) {
      if (e.keyCode !== 13) return
      this.$emit('enter')
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/color.scss';
div {
  position: relative;
}
.text-field {
  border-radius: 3px;
  border: 1px solid $common;
  height: 40px;
  font-size: 16px;
  color: $common;
  padding: 8px;
  box-sizing: border-box;
}
.validation-message {
  color: $caution;
  position: absolute;
  top: 6px;
  left: 4px;
  pointer-events: none;
}
.validation-message-type {
  font-size: 10px;
  color: $caution;
  position: absolute;
  top: 23px;
  left: 4px;
  pointer-events: none;
}
:focus {
  outline: 0;
}
</style>
