import axios from 'utils/axios.js'

// 实战课程导航
export function getLessonNav () {
  return axios.get('/lesson/nav')
}