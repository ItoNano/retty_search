export const search = {
  namespaced: true,
  state: {
    searchData: {
      work: [
        { name: 'カメラマン・カメラアシスタント'},
        { name: 'ヘア・メイクスタッフ'},
        { name: 'コーディネーター'},
        { name: '接客スタッフ'},
        { name: '店長'},
        { name: '販売スタッフ'},
        { name: '着付け師'},
        { name: '経理'},
        { name: '人事'},
        { name: '事務スタッフ'},
        { name: '広報'},
        { name: 'マーケティング'},
        { name: 'デザイナー'},
        { name: 'EC'},
        { name: '営業'},
        { name: '企画'},
        { name: 'コールセンター'},
      ],
      conditions: [
        { name: '急募求人'},
        { name: '未経験可'},
        { name: '転勤なし'},
        { name: '学歴不問'},
        { name: '語学を活かす'},
        { name: '採用枠5名以上'},
        { name: '年齢20~30代スタッフ多め'},
        { name: '年齢40~60代スタッフ多め'},
        { name: '制服あり'},
        { name: '服装自由'},
        { name: '職種・業界未経験可'},
        { name: '職種・業界経験者歓迎'},
        { name: '転勤なし'},
        { name: 'おしゃれな店舗'},
        { name: '昇給・昇格あり'},
        { name: 'ブランクOK'},
        { name: '研修制度充実'},
        { name: '福利厚生あり'},
        { name: 'インセンティブあり'},
        { name: '家賃補助あり'},
        { name: '交通費支給あり'},
        { name: '車・バイク通勤可'},
        { name: '老舗店舗'},
        { name: '試用期間あり'},
        { name: '在宅ワークあり'},
        { name: 'Web面談可能'},
      ]
    }
  },
  mutations: {
    setSearchData(state, word) {
      state.searchData = {}
      state.searchData = word
    },
  },
  getters: {
    getSearchData: state => {
      return state.searchData
    },
  },
  actions: {},
}
