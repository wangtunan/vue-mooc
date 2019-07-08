import axios from 'utils/axios.js'

// 获取主页导航信息
export function getHomeNav() {
  return axios.get('/home/nav')
}
// 获取主页滚动轮播数据
export function getSliderList () {
  return axios.get('/home/slider')
}
// 获取主页课程信息
export function getHomeCourse() {
  return axios.get('/home/course')
}
// 获取主页猿问和手记信息
export function getArticle () {
  return axios.get('/home/article')
}
// 获取精英讲师信息
export function getTeacher () {
  return axios.get('/home/teacher')
}
// 获取全明星信息
export function getAllStar() {
  return axios.get('/home/allstar')
}