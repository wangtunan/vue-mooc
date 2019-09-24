import axios from 'utils/axios.js'

// 获取猿问列表数据
export function getQuestionList () {
  return axios.get('/mock/question/question.json')
}