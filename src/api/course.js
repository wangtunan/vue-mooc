import axios from 'utils/axios.js'

// 获取课程导航数据
export function getCourseNav () {
  return axios.get('/course/nav')
}
// 获取课程信息
export function getCourseList (params) {
  return axios.post('/course/list', params)
}