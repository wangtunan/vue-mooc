import * as types from '../mutation-types.js'
import { getUserInfo, setUserInfo } from 'utils/cache.js'
const state = {
  showLogin: false,
  action: '',
  userinfo: getUserInfo()
}
const mutations = {
  [types.SET_SHOW_LOGIN] (state, showLogin) {
    state.showLogin = showLogin
  },
  [types.SET_LOGIN_ACTION] (state, action) {
    state.action = action
  },
  [types.SET_USER_INFO] (state, userinfo) {
    state.userinfo = userinfo
    setUserInfo(userinfo)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}