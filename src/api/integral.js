import axios from 'utils/axios.js'

// 积分商品类别接口
export function getIntegralTypes () {
  return axios.get('/api/integral/type')
}

// 分页获取积分商品列表接口
export function getIntegralList (params) {
  return axios.get('/api/integral/list', {
    params
  })
}
