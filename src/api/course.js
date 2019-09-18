import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 获取课程导航数据
export function getCourseNav () {
  let url = IS_MOCK_LOCAL ? '/mock/course/nav.json' : '/course/nav'
  return axios.get(url)
}
// 获取课程信息
export function getCourseList () {
  let url = IS_MOCK_LOCAL ? '/mock/course/list.json' : '/course/list'
  return axios.get(url)
}
// 获取课程详情
export function getCourseDetail (id) {
  let url = IS_MOCK_LOCAL ? '/mock/course/detail.json' : `/course/detail/${id}`
  return axios.get(url)
}