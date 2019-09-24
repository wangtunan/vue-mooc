import axios from 'utils/axios.js'

// 获取课程导航数据
export function getCourseNav () {
  return axios.get('/mock/course/nav.json')
}
// 获取课程信息
export function getCourseList () {
  return axios.get('/mock/course/list.json')
}
// 获取课程详情
export function getCourseDetail () {
  return axios.get('/mock/course/detail.json')
}