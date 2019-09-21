import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 获取主页导航信息
export function getHomeNav () {
  let url = IS_MOCK_LOCAL ? '/mock/home/nav.json' : '/home/nav'
  return axios.get(url)
}
// 获取主页滚动轮播数据
export function getSliderList () {
  let url = IS_MOCK_LOCAL ? '/mock/home/slider.json' : '/home/slider'
  return axios.get(url)
}
// 获取主页课程信息
export function getHomeCourse () {
  let url = IS_MOCK_LOCAL ? '/mock/home/course.json' : '/home/course'
  return axios.get(url)
}
// 获取主页猿问和手记信息
export function getArticle () {
  let url = IS_MOCK_LOCAL ? '/mock/home/article.json' : '/home/article'
  return axios.get(url)
}
// 获取精英讲师信息
export function getTeacher () {
  let url = IS_MOCK_LOCAL ? '/mock/home/teacher.json' : '/home/teacher'
  return axios.get(url)
}
// 获取全明星信息
export function getAllStar () {
  let url = IS_MOCK_LOCAL ? '/mock/home/allstar.json' : '/home/allstar'
  return axios.get(url)
}