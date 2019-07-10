import axios from 'utils/axios.js'

// 用户登录
export function userLogin (params) {
  return axios.post('/user/login', {
    data: params
  })
}
// 用户注册接口
export function userRegister(params) {
  return axios.post('/user/register', {
    data: params
  })
}