import * as types from '../mutation-types'
import { LoginParams, UserState } from '@/types/index'
import { ActionContext } from 'vuex'
import { userLogin } from '@/api/user'
import router from '@/router/index'
import { ERR_OK } from '@/api/config'
const state = {
  token: '',
  userInfo: {}
}

const mutations = {
  [types.SET_TOKEN] (state: UserState, token: string) {
    state.token = token
  },
  [types.SET_USER_INFO] (state: UserState, userInfo: object) {
    state.userInfo = userInfo
  }
}

const actions = {
  async login ({ commit }: ActionContext<UserState, any>, params: LoginParams) {
    try {
      const { code, data, msg } = await userLogin(params)
      if (code === ERR_OK) {
        commit(`${types.SET_TOKEN}`, data)
        return Promise.resolve()
      } else {
        throw new Error(msg)
      }
    } catch (e) {
      return Promise.reject(e)
    }
  },
  logout ({ commit }: ActionContext<UserState, any>) {
    commit(`${types.SET_TOKEN}`, '')
    commit(`${types.SET_USER_INFO}`, {})
    router.push('/')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
