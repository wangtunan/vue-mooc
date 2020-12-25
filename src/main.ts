import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupElementPlus } from '@/setup/element-plus/index'
import { setupStore } from '@/store/index'
import 'normalize.css'
import '@/assets/styles/index.scss'

const app = createApp(App)

// setup element-plus
setupElementPlus(app)

// setup vuex store
setupStore(app)

// setup router
setupRouter(app)

// mount app when router is ready
router.isReady().then(() => {
  app.mount('#app')
})
