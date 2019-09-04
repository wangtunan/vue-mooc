import * as types from '../mutation-types.js'

const state = {
  scrollTop: 0
}
const mutations = {
  [types.SET_SCROLL_TOP] (state, scrollTop) {
    state.scrollTop = scrollTop
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
