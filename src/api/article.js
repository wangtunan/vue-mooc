import axios from 'utils/axios.js'

// 获取手记导航数据
export function getArticleNavList () {
  return axios.get('/mock/article/nav.json')
}
// 获取猿问列表数据
export function getArticleList () {
  return axios.get('/mock/article/list.json')
}