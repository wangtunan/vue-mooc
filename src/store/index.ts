import { App } from 'vue'
import { createStore } from 'vuex'

export const router = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export function setupStore (app: App<Element>) {
  app.use(router)
}

export default router
