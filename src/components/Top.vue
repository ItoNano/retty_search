<template>
  <div>
    <text-field />
    <search-edit />
    {{getSearchData.work}}
    {{getSearchData.conditions}}
  </div>
</template>

<script>
import SearchEdit from '@/components/organisms/Modals/SearchEdit.vue';
import { mapGetters } from 'vuex'
import TextField from '@/components/atoms/TextField.vue'
export default {
  components : {
    TextField,
    SearchEdit
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/color.scss';
</style>
