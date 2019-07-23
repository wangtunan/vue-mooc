import axios from 'utils/axios.js'

// 获取课程导航数据
export function getCourseNav (params) {
  return axios.post('/course/nav', {
    data: params
  })
}