import axios from 'utils/axios.js'
import { baseUrl } from 'api/config.js'

// 获取主页导航信息
export function getHomeNav() {
  let url =  baseUrl + '/home/nav'
  return axios.get(url)
}
// 获取主页课程信息
export function getHomeCourse() {
  let url =  baseUrl + '/home/course'
  return axios.get(url)
}