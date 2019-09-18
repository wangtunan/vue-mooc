import axios from 'utils/axios.js'
import { IS_MOCK_LOCAL } from 'api/config.js'

// 获取中心列表
export function getNoticeList () {
  let url = IS_MOCK_LOCAL ? '/mock/notice/notice.json' : '/notice/list'
  return axios.get(url)
}
// 获取消息中心设置
export function getNoticeSetting () {
  let url = IS_MOCK_LOCAL ? '/mock/notice/setting.json' : '/notice/setting'
  return axios.get(url)
}