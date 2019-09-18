import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 获取专栏列表数据
export function getReadList () {
  let url = IS_MOCK_LOCAL ? '/mock/read/read.json' : '/read/list'
  return axios.get(url)
}
// 获取专栏详情数据
export function getReadDetail (id) {
  let url = IS_MOCK_LOCAL ? '/mock/read/detail.json' : `/read/detail/${id}`
  return axios.get(url)
}