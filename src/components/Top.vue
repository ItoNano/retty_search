<template>
  <div>
    <search-modal
      v-if="showSearchModal"
      @closeModal="closeModal"
    />
    <Button type="main" width="320px" height="42px" @click="openSearch">
      検索
    </Button>
  </div>
</template>

<script>
import SearchModal from '@/components/organisms/Modals/SearchModal.vue';
import Button from '@/components/atoms/Button.vue';
import { mapGetters } from 'vuex'
export default {
  components : {
    SearchModal,
    Button,
  },
  data() {
    return {
      search_list: {
        work: [
          'カメラマン・カメラアシスタント',
          'ヘア・メイクスタッフ',
          'コーディネーター',
          '接客スタッフ',
          '店長',
          '販売スタッフ',
          '着付け師',
          '経理',
          '人事',
          '事務スタッフ',
          '広報',
          'マーケティング',
          'デザイナー',
          'EC',
          '営業',
          '企画',
          'コールセンター'
        ],
        conditions: [
          '急募求人',
          '未経験可',
          '転勤なし',
          '学歴不問',
          '語学を活かす',
          '採用枠5名以上',
          '年齢20~30代スタッフ多め',
          '年齢40~60代スタッフ多め',
          '制服あり',
          '服装自由',
          '職種・業界未経験可',
          '職種・業界経験者歓迎',
          '転勤なし',
          'おしゃれな店舗',
          '昇給・昇格あり',
          'ブランクOK',
          '研修制度充実',
          '福利厚生あり',
          'インセンティブあり',
          '家賃補助あり',
          '交通費支給あり',
          '車・バイク通勤可',
          '老舗店舗',
          '試用期間あり',
          '在宅ワークあり',
          'Web面談可能'
        ]
      },
      showSearchModal: false,
    }
  },
  computed: {
    ...mapGetters({
      getSearchData: 'search/getSearchData',
    }),
  },
  created() {
    this.setSearchData()
  },
  methods: {
    setSearchData() {
      this.$store.commit('search/setSearchData',this.search_list)
    },
    openSearch() {
      this.showSearchModal = true
    },
    closeModal() {
      this.showSearchModal = false
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/color.scss';
</style>
