import axios from 'utils/axios.js'

// 获取中心列表
export function getNoticeList () {
  return axios.get('/mock/notice/notice.json')
}
// 获取消息中心设置
export function getNoticeSetting () {
  return axios.get('/mock/notice/setting.json')
}