import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 实战课程导航
export function getLessonNav () {
  let url = IS_MOCK_LOCAL ? '/mock/lesson/nav.json' : '/lesson/nav'
  return axios.get(url)
}
// 实战课程列表
export function getLessonList () {
  let url = IS_MOCK_LOCAL ? '/mock/lesson/list.json' : '/lesson/list'
  return axios.get(url)
}
// 实战课程详情
export function getLessonDetail (id) {
  let url = IS_MOCK_LOCAL ? '/mock/lesson/detail.json' : `/lesson/detail/${id}`
  return axios.get(url)
}