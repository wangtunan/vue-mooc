import axios from 'utils/axios.js'

// 分页获取中心列表
export function getNoticeList (params) {
  return axios.get(`/api/notice/list`, {
    params: params
  })
}

// 单个消息已读
export function noticeReadOne (data) {
  return axios.post('/api/notice/read', data)
}

// 单个消息删除
export function noticeNoticeDelete (data) {
  return axios.post('/api/notice/delete', data)
}

// 全部消息已读
export function noticeReadAll (data) {
  return axios.post('/api/notice/read/all', data)
}

// 获取消息中心设置
export function getNoticeSetting () {
  return axios.get('/mock/notice/setting.json')
}

// 是否存在未读消息
export function getNotReadNotice () {
  return axios.get('/api/notice/read/not')
}
