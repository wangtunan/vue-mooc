import axios from 'utils/axios.js'

// 获取主页导航信息
export function getHomeNav () {
  return axios.get('/api/home/nav')
}

// 获取主页滚动轮播数据
export function getSliderList () {
  return axios.get('/api/home/slider')
}

// 获取主页课程信息
export function getHomeCourse () {
  return axios.get('/api/home/lesson')
}

// 获取主页猿问和手记信息
export function getArticle () {
  return axios.get('/mock/home/article.json')
}

// 获取精英讲师信息
export function getTeacher () {
  return axios.get('/api/home/teacher')
}

// 获取全明星信息
export function getAllStar () {
  return axios.get('/api/home/student')
}
