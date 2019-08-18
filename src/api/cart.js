import axios from 'utils/axios.js'

// 获取购物车列表接口
export function getCartList ()  {
  return axios.get('/cart/list')
}