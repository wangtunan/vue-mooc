import axios from 'utils/axios.js'

// 获取购物车列表接口
export function getCartList ()  {
  return axios.get('/mock/cart/list')
}

// 单个添加购物车接口
export function addCart (data) {
  return axios.post('/mock/cart/create', data)
}

// 单个删除购物车接口
export function deleteCart (data) {
  return axios.post('/mock/cart/delete', data)
}

// 多个删除购物车接口
export function multipleDeleteCart (data) {
  return axios.post('/mock/cart/delete/ids', data)
}

// 支付方式接口
export function getPayWay () {
  return axios.get('/mock/cart/pay-way.json')
}

