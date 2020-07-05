<template>
  <div :class="showBackgroundShadow">
    <div class="small-modal">
      <div ref='header' class="modal-header">
        <slot name="main-header" />
      </div>
      <div ref='content' class="modal-content" :style="contentStyle">
        <slot name="main-content" />
      </div>
      <div ref='footer' class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contentStyle: {
        marginTop: '0px',
        marginBottom: '0px'
      }
    }
  },
  mounted() {
    this.contentStyle.marginTop = this.$refs.header.clientHeight + 'px'
  },
  methods: {
  },
  computed: {
    showBackgroundShadow() {
      return 'overlay'
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/modal.scss';
</style>