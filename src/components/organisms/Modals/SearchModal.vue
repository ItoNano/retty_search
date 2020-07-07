<template>
  <modal :isSmall="true">
    <template v-slot:main-header>
      <div class="modal-header-search">
        <font-awesome-icon :icon="['fas', 'times']" style="font-size:24px;" class="close-icon" @click="closeModal()" />
        <text-field
          placeholder="職業"
          v-model="inputData.work"
          width="100px"
        />
        <text-field
          placeholder="条件"
          v-model="inputData.conditions"
          width="180px"
        />
      </div>
    </template>
    <template v-slot:main-content>
      <div class="result-box">
        <div class="result">
          <div>職業:{{resultData.work}}</div>
          <div>条件:{{resultData.conditions}}</div>
        </div>
        <div class="select">
          <div class="select-box" v-for="(workItem, workIndex) in getSearchData.work" :key="workIndex">
            <div class="select-item" @click="selectWork(workItem.name)" v-if="resultWork(workItem.name)">{{workItem.name}}</div>
          </div>
        </div>
        <div class="select">
          <div class="select-box" v-for="(conditionsItem, conditionsIndex) in getSearchData.conditions" :key="conditionsIndex">
            <div class="select-item" @click="selectConditions(conditionsItem.name)" v-if="resultConditions(conditionsItem.name)">{{conditionsItem.name}}</div>
          </div>
        </div>
      </div>
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
  computed: {
    ...mapGetters({
      getSearchData: 'search/getSearchData',
    }),
    resultWork() {
      return function(text){
        if(text.indexOf(this.inputData.work) !== -1) {
          return true
        } else {
          return false
        }
      }
    },
    resultConditions() {
      return function(text){
        if(text.indexOf(this.inputData.conditions) !== -1) {
          return true
        } else {
          return false
        }
      }
    },
  },
  data() {
    return {
      inputData: {
        work: '',
        conditions: '',
      },
      resultData: {
        work: '',
        conditions: '',
      }
    }
  },
  mounted() {
  },
  methods: {
    closeModal() {
      this.$emit('closeModal', event)
    },
    selectWork(text) {
      this.resultData.work = text
    },
    selectConditions(text) {
      this.resultData.conditions = text
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
