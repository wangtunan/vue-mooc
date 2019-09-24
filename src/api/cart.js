import axios from 'utils/axios.js'

// 获取购物车列表接口
export function getCartList ()  {
  return axios.get('/mock/cart/cart.json')
}
// 支付方式接口
export function getPayWay () {
  return axios.get('/mock/cart/pay-way.json')
}