import axios from 'utils/axios.js'

// 用户登录
export function userLogin (data) {
  return axios.post('/mock/user/login', data)
}

// 用户注册接口
export function userRegister (data) {
  return axios.post('/mock/user/register', data)
}

// 获取用户详细信息接口
export function getUserInfo () {
  return axios.get('/mock/user/userinfo.json')
}

// 获取用户课程信息接口
export function getUserCourse () {
  return axios.get('/mock/user/course.json')
}
