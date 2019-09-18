import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 获取猿问列表数据
export function getQuestionList () {
  let url = IS_MOCK_LOCAL ? '/mock/question/question.json' : '/question/list'
  return axios.get(url)
}