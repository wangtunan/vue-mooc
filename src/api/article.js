import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 获取手记导航数据
export function getArticleNavList () {
  let url = IS_MOCK_LOCAL ? '/mock/article/nav.json' : '/article/nav'
  return axios.get(url)
}
// 获取猿问列表数据
export function getArticleList () {
  let url = IS_MOCK_LOCAL ? '/mock/article/list.json' : '/article/list'
  return axios.get(url)
}