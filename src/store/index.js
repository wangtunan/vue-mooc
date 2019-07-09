import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login.js'
import * as getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login
  },
  getters
})