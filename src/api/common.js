import axios from 'utils/axios.js'

// 获取用户搜索历史
export function getSearchHistory () {
  return axios.get('/common/search/history')
}
// 获取热搜词接口
export function getHot () {
  return axios.get('/common/hot')
}