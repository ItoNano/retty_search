export const search = {
  namespaced: true,
  state: {
    searchData: {}
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
