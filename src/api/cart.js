import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 获取购物车列表接口
export function getCartList ()  {
  let url = IS_MOCK_LOCAL ? '/mock/cart/cart.json' : '/cart/list'
  return axios.get(url)
}
// 支付方式接口
export function getPayWay () {
  let url = IS_MOCK_LOCAL ? '/mock/cart/pay-way.json' : '/cart/pay/way'
  return axios.get(url)
}