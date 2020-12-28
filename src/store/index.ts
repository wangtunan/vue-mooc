import { App } from 'vue'
import { createStore } from 'vuex'
import user from './modules/user'
import * as getters from './getters'

export const router = createStore({
  getters,
  modules: {
    user
  }
})

export function setupStore (app: App<Element>) {
  app.use(router)
}

export default router
