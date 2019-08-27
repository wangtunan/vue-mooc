import axios from 'utils/axios.js'

// 获取手记导航数据
export function getArticleNavList () {
  return axios.get('/article/nav')
}
// 获取猿问列表数据
export function getArticleList () {
  return axios.get('/article/list')
}