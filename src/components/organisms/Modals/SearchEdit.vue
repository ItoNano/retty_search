<template>
  <modal :isSmall="true">
    <template v-slot:main-header>
      <div class="modal-header-search">
        <font-awesome-icon :icon="['fas', 'times']" style="font-size:24px;" class="close-icon" @click="closeModal()" />
        <text-field placeholder="職業" v-model="work" width="100px" />
        <text-field placeholder="条件" v-model="conditions" width="180px" />
      </div>
    </template>
    <template v-slot:main-content>
    </template>
    <template v-slot:footer>
    </template>
  </modal>  
</template>
<script>
import Modal from '@/components/organisms/Modals/index.vue';
import TextField from '@/components/atoms/TextField.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Modal,
    TextField,
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
.close-icon {
  padding-right: 8px;
}
</style>
