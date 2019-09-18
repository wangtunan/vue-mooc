import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 用户订单列表接口
export function orderList () {
  let url = IS_MOCK_LOCAL ? '/mock/user/order.json' : '/user/order/list'
  return axios.get(url)
}
// 用户充值记录接口
export function rechargeList () {
  let url = IS_MOCK_LOCAL ? '/mock/user/recharge.json' : '/user/recharge'
  return axios.get(url)
}
// 用户优惠券接口
export function curponList () {
  let url = IS_MOCK_LOCAL ? '/mock/user/curpon.json' : '/user/curpon'
  return axios.get(url)
}
// 用户咨询接口
export function consultList () {
  let url = IS_MOCK_LOCAL ? '/mock/user/consult.json' : '/user/consult'
  return axios.get(url)
}
// 用户消费记录接口
export function billList () {
  let url = IS_MOCK_LOCAL ? '/mock/user/bill.json' : '/user/bill'
  return axios.get(url)
}