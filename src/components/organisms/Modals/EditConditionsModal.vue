<template>
  <modal :content-style='contentStyle'>
    <template ref='header' v-slot:main-header>
    </template>
    <template ref='content' v-slot:main-content>
      <div class="button-area">
        <Button
          class="modal-button"
          type="sub"
          width="320px"
          height="42px"
          @click="closeModal"
        >
          キャンセル
        </Button>
        <Button
          class="modal-button"
          type="main"
          width="320px"
          height="42px"
          @click="closeModal"
        >
          保存
        </Button>
      </div>
    </template>
    <template v-slot:footer>
    </template>
  </modal>
</template>
<script>
import Modal from '@/components/organisms/Modals/index.vue';
// import TextField from '@/components/atoms/TextField.vue'
import Button from '@/components/atoms/Button.vue';
import { mapGetters } from 'vuex'

export default {
  components: {
    Button,
    Modal,
    // TextField,
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
      inputData: {
        work: '',
        conditions: '',
      },
    }
  },
  mounted() {
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
