<template>
  <div>
    <search-modal
      v-if="showSearchModal"
      @closeModal="closeModal"
    />
    <edit-conditions-modal
      v-if="showConditionsModal"
      @closeModal="closeModal"
    />
    <edit-work-modal
      v-if="showWorkModal"
      @closeModal="closeModal"
    />
    <div class="button-area">
      <Button
        class="page-button"
        type="sub"
        width="320px"
        height="70px"
        @click="openWorkModal"
      >
        職業編集
      </Button>
      <Button
        class="page-button"
        type="sub"
        width="320px"
        height="70px"
        @click="openConditionsModal"
      >
        条件編集
      </Button>
      <Button
        class="page-button"
        type="main"
        width="320px"
        height="70px"
        @click="openSearchModal"
      >
        検索
      </Button>
    </div>
    <div>
      <div class="information">
        現在登録されている職業数:
        {{getSearchData.work.length}}
      </div>
      <div v-for="(workItem, workIndex) in getSearchData.work" :key="workIndex">
        {{workItem.name}}
      </div>
      <div class="information">
        現在登録されている条件数:
        {{getSearchData.conditions.length}}
      </div>
    </div>
  </div>
</template>

<script>
import SearchModal from '@/components/organisms/Modals/SearchModal.vue';
import EditWorkModal from '@/components/organisms/Modals/EditWorkModal.vue';
import EditConditionsModal from '@/components/organisms/Modals/EditConditionsModal.vue';
import Button from '@/components/atoms/Button.vue';
import { mapGetters } from 'vuex'
export default {
  components : {
    SearchModal,
    EditWorkModal,
    EditConditionsModal,
    Button,
  },
  data() {
    return {
      showSearchModal: false,
      showWorkModal: false,
      showConditionsModal: false,
    }
  },
  computed: {
    ...mapGetters({
      getSearchData: 'search/getSearchData',
    }),
  },
  methods: {
    // setSearchData() {
    //   this.$store.commit('search/setSearchData',this.search_list)
    // },
    openSearchModal() {
      this.showSearchModal = true
    },
    openWorkModal() {
      this.showWorkModal = true
    },
    openConditionsModal() {
      this.showConditionsModal = true
    },
    closeModal() {
      this.showSearchModal = false
      this.showWorkModal = false
      this.showConditionsModal = false
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/color.scss';
@import '@/assets/scss/main.scss';
</style>
