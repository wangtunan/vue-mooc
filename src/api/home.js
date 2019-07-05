import axios from 'utils/axios.js'

// 获取主页导航信息
export function getHomeNav() {
  return axios.get('/api/home/nav.json')
}