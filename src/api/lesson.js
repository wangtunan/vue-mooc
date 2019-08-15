import axios from 'utils/axios.js'

// 实战课程导航
export function getLessonNav () {
  return axios.get('/lesson/nav')
}
// 实战课程列表
export function getLessonList (params) {
  return axios.post('/lesson/list', params)
}
// 实战课程详情
export function getLessonDetail (id) {
  return axios.get(`/lesson/detail/${id}`)
}