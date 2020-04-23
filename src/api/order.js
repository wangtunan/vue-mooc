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

// 用户消费记录接口
export function getUserBillList (params) {
  return axios.get('/mock/bill/list', {
    params
  })
}

// 生成订单
export function createOrder (data) {
  return axios.post('/mock/order/create', data)
}

// 订单详情
export function getOrderInfo (params) {
  return axios.get('/mock/order/info', {
    params
  })
}

// 订单支付
export function orderPay (data) {
  return axios.post('/mock/order/pay', data)
}

// 订单列表
export function getOrderList (params) {
  return axios.get('/mock/order/list', {
    params
  })
}

// 取消订单
export function cancelOrder (params) {
  return axios.get('/mock/order/cancel', {
    params
  })
}

// 删除订单
export function deleteOrder (params) {
  return axios.get('/mock/order/delete', {
    params
  })
}

// 用户咨询接口
export function consultList () {
  return axios.get('/mock/user/consult.json')
}
// 用户消费记录接口
export function billList () {
  return axios.get('/mock/user/bill.json')
}