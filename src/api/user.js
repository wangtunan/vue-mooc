import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 用户登录
export function userLogin () {
  let url = IS_MOCK_LOCAL ? '/mock/user/login.json' : '/user/login'
  return axios.get(url)
}
// 用户注册接口
export function userRegister () {
  let url = IS_MOCK_LOCAL ? '/mock/user/register.json' : '/user/register'
  return axios.get(url)
}
// 获取用户详细信息接口
export function getUserInfo () {
  let url = IS_MOCK_LOCAL ? '/mock/user/userinfo.json' : '/user/info'
  return axios.get(url)
}
// 获取用户课程信息接口
export function getUserCourse () {
  let url = IS_MOCK_LOCAL ? '/mock/user/course.json' : '/user/course'
  return axios.get(url)
}