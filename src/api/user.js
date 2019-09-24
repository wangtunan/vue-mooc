import axios from 'utils/axios.js'

// 用户登录
export function userLogin () {
  return axios.get('/mock/user/login.json')
}
// 用户注册接口
export function userRegister () {
  return axios.get('/mock/user/register.json')
}
// 获取用户详细信息接口
export function getUserInfo () {
  return axios.get('/mock/user/userinfo.json')
}
// 获取用户课程信息接口
export function getUserCourse () {
  return axios.get('/mock/user/course.json')
}