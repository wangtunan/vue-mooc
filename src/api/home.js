import axios from 'utils/axios.js'

// 获取主页导航信息
export function getHomeNav() {
  return axios.get('/api/home/nav.json')
}
// 获取主页课程信息
export function getHomeCourse() {
  return axios.get('/api/home/course.json')
}