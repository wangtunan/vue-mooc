import axios from 'utils/axios.js'

// 获取猿问列表数据
export function getQuestionList () {
  return axios.get('/mock/question/question.json')
}
// 获取猿问关注标签列表
export function getLikeList () {
  return axios.get('/mock/question/like.json')
}