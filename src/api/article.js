import axios from 'utils/axios.js'

// 获取手记导航数据
export function getArticleNavList () {
  return axios.get('/article/nav')
}