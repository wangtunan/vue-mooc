import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 首页路由
const Home = () => import('components/home/home.vue')
const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component:Home 
  }
]

export default new Router({
  routes: routes,
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})