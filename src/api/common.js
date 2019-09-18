import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 获取用户搜索历史
export function getSearchHistory () {
  let url = IS_MOCK_LOCAL ? '/mock/common/search-history.json' : '/common/search/history'
  return axios.get(url)
}
// 获取热搜词接口
export function getHot () {
  let url = IS_MOCK_LOCAL ? '/mock/common/hot.json' : '/common/hot'
  return axios.get(url)
}
// 获取底部版权footer数据
export function getFooter () {
  let url = IS_MOCK_LOCAL ? '/mock/common/footer.json' : '/common/footer'
  return axios.get(url)
}
// 获取头部数据接口
export function getHeader () {
  let url = IS_MOCK_LOCAL ? '/mock/common/header.json' : '/common/header'
  return axios.get(url)
}