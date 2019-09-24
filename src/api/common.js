import axios from 'utils/axios.js'

// 获取用户搜索历史
export function getSearchHistory () {
  return axios.get('/mock/common/search-history.json')
}
// 获取热搜词接口
export function getHot () {
  return axios.get('/mock/common/hot.json')
}
// 获取底部版权footer数据
export function getFooter () {
  return axios.get('/mock/common/footer.json')
}
// 获取头部数据接口
export function getHeader () {
  return axios.get('/mock/common/header.json')
}