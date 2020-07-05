<template>
  <modal :isSmall="true">
    <template v-slot:main-content>        
      <div class="form">
        <div class="form-content">
          <div class="form-content-label">名前(漢字)</div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
    </template>
  </modal>  
</template>
<script>
import Modal from '@/components/organisms/Modals/index.vue';
import { mapGetters } from 'vuex'

export default {
  components: {
    Modal, 
  },
  props: {
    userData: {
      type: Object,
      default: () => {},
    }
  },
  computed: {
    ...mapGetters({
      getSearchData: 'search/getSearchData',
    }),
  },
  data() {
    return {
      failedValidate: false,
      inputData: {
        name: '',
        name_eng: '',
      }
    }
  },
  created() {
  },
  methods: {
    closeModal() {
      this.$emit('closeModal', event)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/modal.scss';
</style>
