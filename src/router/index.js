import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
import { getUserInfo } from 'utils/cache.js'
Vue.use(Router)

// 首页路由
const Home = () => import('components/home/home.vue')
// 个人中心路由
const UserCenter = () => import('components/user/index.vue')
// 订单中心路由
const OrderIndex = () => import('components/order/index.vue')
// 课程
const CourseIndex = () => import('components/course/index.vue')
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
    component:UserCenter,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/order',
    name: 'OrderIndex',
    component:OrderIndex,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/course',
    name: 'CourseIndex',
    component:CourseIndex
  }
]
const router = new Router({
  routes: routes,
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})

// 路由拦截
router.beforeEach((to, from, next) => {
  let userinfo = getUserInfo()
  if (to.meta.requireAuth) {
    if (userinfo.name) {
      next()
    } else{
      store.commit('login/SET_SHOW_LOGIN', true)
    }
  } else {
    next()
  }
})


export default router