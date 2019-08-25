import axios from 'utils/axios.js'

// 获取专栏列表数据
export function getReadList () {
  return axios.get('/read/list')
}
// 获取专栏详情数据
export function getReadDetail (id) {
  return axios.get(`/read/detail/${id}`)
}