import axios from 'utils/axios.js'

// 用户订单列表接口
export function orderList () {
  return axios.get('/user/order/list')
}