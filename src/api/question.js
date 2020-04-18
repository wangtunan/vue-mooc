import axios from 'utils/axios.js'

// 获取猿问列表数据
export function getQuestionList (params) {
  return axios.get('/mock/question/list', {
    params
  })
}

// 获取关注标签列表
export function getFollowList () {
  return axios.get('/mock/label/follow/list')
}

// 关注标签
export function followLabels (data) {
  return axios.post('/mock/label/follow', data)
}

// 获取标签列表数据
export function getLabelList () {
  return axios.get('/mock/label/list')
}
