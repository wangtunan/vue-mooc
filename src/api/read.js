import axios from 'utils/axios.js'

// 获取专栏列表数据
export function getReadList (params) {
  return axios.get(`/mock/read/list`, {
    params
  })
}

// 获取专栏详情数据
export function getReadDetail () {
  return axios.get('/mock/read/detail.json')
}
