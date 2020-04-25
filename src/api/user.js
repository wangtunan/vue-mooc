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
  return axios.get('/mock/user/info')
}

// 分页获取用户登录日志
export function getUserLogs (params) {
  return axios.get('/mock/log/list', {
    params
  })
}

// 编辑账号绑定信息
export function updateUserBinds (data) {
  return axios.post('/mock/user/update/binds', data)
}

// 编辑用户个人信息
export function updateUserInfo (data) {
  return axios.post('/mock/user/update/info', data)
}

// 获取用户课程信息接口
export function getUserCourse (params) {
  return axios.get('/mock/user/course/list', {
    params
  })
}
