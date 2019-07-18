import axios from 'utils/axios.js'

// 用户订单列表接口
export function orderList () {
  return axios.get('/user/order/list')
}
// 用户充值记录接口
export function rechargeList () {
  return axios.get('/user/recharge')
}
// 用户优惠券接口
export function curponList () {
  return axios.get('/user/curpon')
}
// 用户咨询接口
export function consultList () {
  return axios.get('/user/consult')
}