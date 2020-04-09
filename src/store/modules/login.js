import axios from 'utils/axios.js'
import { ERR_OK } from 'api/config.js'
import * as types from '../mutation-types.js'
import { getUserInfo, setUserInfo, removeUserInfo } from 'utils/cache.js'
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
    if (userinfo) {
      setUserInfo(userinfo)
    } else {
      removeUserInfo(userinfo)
    }
  }
}

const actions = {
  logout ({commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/mock/user/logout').then(res => {
        const { code } = res
        if (code === ERR_OK) {
          commit(types.SET_USER_INFO, '')
          resolve()
        } else {
          reject()
        }
      }).catch(() => {
        reject()
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}