import router from '@/router/index'
import * as types from '../mutation-types'
import { LoginParams, UserState } from '@/types/index'
import { ActionContext } from 'vuex'
import { userLogin, userRegister, getUserInfo } from '@/api/user'
import { ERR_OK } from '@/api/config'
import { getToken, setToken, removeToken, removeUserInfo, setUserInfo, getUserInfo as getUserCacheInfo } from '@/utils/cache'

const state = {
  token: getToken(),
  userInfo: getUserCacheInfo()
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
        commit(`${types.SET_TOKEN}`, setToken(data))
        return Promise.resolve(true)
      } else {
        throw new Error(msg)
      }
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async register ({ commit }: ActionContext<UserState, any>, params: LoginParams) {
    try {
      const { code, data, msg } = await userRegister(params)
      if (code === ERR_OK) {
        commit(`${types.SET_TOKEN}`, setToken(data))
        return Promise.resolve(true)
      } else {
        throw new Error(msg)
      }
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async getInfo ({ commit }: ActionContext<UserState, any>, token: string) {
    try {
      const { code, data, msg } = await getUserInfo(token)
      if (code === ERR_OK) {
        commit(`${types.SET_USER_INFO}`, setUserInfo(data))
      } else {
        throw new Error(msg)
      }
    } catch (e) {
      return Promise.reject(e)
    }
  },
  logout ({ commit }: ActionContext<UserState, any>) {
    removeToken()
    removeUserInfo()
    commit(`${types.SET_TOKEN}`, '')
    commit(`${types.SET_USER_INFO}`, {})
    router.push('/login')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
