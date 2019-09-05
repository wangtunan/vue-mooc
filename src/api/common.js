import axios from 'utils/axios.js'

// 获取用户搜索历史
export function getSearchHistory () {
  return axios.get('/common/search/history')
}
// 获取热搜词接口
export function getHot () {
  return axios.get('/common/hot')
}
// 获取底部版权footer数据
export function getFooter () {
  return axios.get('/common/footer')
}
// 获取头部数据接口
export function getHeader () {
  return axios.get('/common/header')
}