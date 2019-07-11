import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 首页路由
const Home = () => import('components/home/home.vue')
// 个人中心路由
const UserCenter = () => import('components/user/index.vue')
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
  },
  {
    path: '/user',
    name: 'UserCenter',
    component:UserCenter 
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