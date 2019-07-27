import axios from 'utils/axios.js'

// 获取用户搜索历史
export function getSearchHistory () {
  return axios.get('/common/search/history')
}