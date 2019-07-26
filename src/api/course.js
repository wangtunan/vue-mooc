import axios from 'utils/axios.js'

// 获取课程导航数据
export function getCourseNav (params) {
  return axios.post('/course/nav', {
    data: params
  })
}
// 获取课程信息
export function getCourseList (params) {
  return axios.post('/course/list', {
    data: params
  })
}