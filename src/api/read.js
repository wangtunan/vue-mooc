import axios from 'utils/axios.js'

// 获取专栏列表数据
export function getReadList () {
  return axios.get('/read/list')
}