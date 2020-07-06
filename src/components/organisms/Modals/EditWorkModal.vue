<template>
  <modal>
    <template ref='header' v-slot:main-header>
    </template>
    <template ref='content' v-slot:main-content>
      <div class="content-box">
        <div class="form" v-for="(workItem, workIndex) in inputSearchData" :key='workIndex'>
          <div class="form-content">
            <text-field width="65vw" height="36px" v-model="workItem.name"/>
            <Button
              class="modal-footer-button"
              type="caution"
              width="50px"
              height="36px"
              @click="closeModal"
            >
              削除
            </Button>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div>
        <Button
          class="modal-footer-button"
          type="sub"
          width="150px"
          height="42px"
          @click="closeModal"
        >
          キャンセル
        </Button>
        <Button
          class="modal-footer-button"
          type="main"
          width="150px"
          height="42px"
          @click="closeModal"
        >
          保存
        </Button>
      </div>
    </template>
  </modal>
</template>
<script>
import Modal from '@/components/organisms/Modals/index.vue';
import TextField from '@/components/atoms/TextField.vue'
import Button from '@/components/atoms/Button.vue';
import { mapGetters } from 'vuex'

export default {
  components: {
    Button,
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
  created() {
    this.inputSearchData = this.getSearchData.work
  },
  data() {
    return {
      inputData: {
        work: '',
        conditions: '',
      },
      inputSearchData: ''
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
.box {
  height: 50px;
}
</style>
