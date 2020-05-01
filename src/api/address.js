import axios from 'utils/axios.js'

// 获取用户收货地址接口
export function getUserAddresss () {
  return axios.get('/api/address/list')
}

// 新建用户收货地址接口
export function createUserAddress (data) {
  return axios.post('/api/address/create', data)
}

// 编辑用户收货地址接口
export function updateUserAddress (data) {
  return axios.post('/api/address/update', data)
}

// 删除用户收货地址接口
export function deleteUserAddress (params) {
  return axios.get('/api/address/delete', {
    params
  })
}

// 设为默认收货地址接口
export function defaultUserAddress (params) {
  return axios.get('/api/address/default', {
    params
  })
}
