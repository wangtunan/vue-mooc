import axios from 'utils/axios.js'

// 获取中心列表
export function getNoticeList () {
  return axios.get('/notice/list')
}
// 获取消息中心设置
export function getNoticeSetting () {
  return axios.get('/notice/setting')
}