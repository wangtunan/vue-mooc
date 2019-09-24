import axios from 'utils/axios.js'

// 用户订单列表接口
export function orderList () {
  return axios.get('/mock/user/order.json')
}
// 用户充值记录接口
export function rechargeList () {
  return axios.get('/mock/user/recharge.json')
}
// 用户优惠券接口
export function curponList () {
  return axios.get('/mock/user/curpon.json')
}
// 用户咨询接口
export function consultList () {
  return axios.get('/mock/user/consult.json')
}
// 用户消费记录接口
export function billList () {
  return axios.get('/mock/user/bill.json')
}