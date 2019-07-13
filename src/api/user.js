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
// 获取用户详细信息接口
export function getUserInfo() {
  return axios.get('/user/info')
}