import * as types from './mutation-types.js'
const state = {
  showLogin: false
}
const mutations = {
  [types.SET_SHOW_LOGIN] (state, showLogin) {
    state.showLogin = showLogin
  }
}

export default {
  namespaced: true,
  state,
  mutations
}