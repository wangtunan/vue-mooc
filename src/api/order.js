import axios from 'utils/axios.js'

// 分页获取用户充值记录接口
export function getUserRecharges (params) {
  return axios.get('/mock/recharge/list', {
    params
  })
}

// 新增用户充值记录接口
export function createUserRecharges (data) {
  return axios.post('/mock/recharge/create', data)
}

// 用户优惠券接口
export function getCouponList (params) {
  return axios.get('/mock/coupon/list', {
    params
  })
}

// 用户订单列表接口
export function orderList () {
  return axios.get('/mock/user/order.json')
}

// 用户咨询接口
export function consultList () {
  return axios.get('/mock/user/consult.json')
}
// 用户消费记录接口
export function billList () {
  return axios.get('/mock/user/bill.json')
}