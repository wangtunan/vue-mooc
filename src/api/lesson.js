import axios from 'utils/axios.js'

// 实战课程导航
export function getLessonNav () {
  return axios.get('/mock/lesson/nav.json')
}
// 实战课程列表
export function getLessonList (params) {
  return axios.get('/mock/lesson/list', {
    params
  })
}
// 实战课程详情
export function getLessonDetail () {
  return axios.get('/mock/lesson/detail.json')
}