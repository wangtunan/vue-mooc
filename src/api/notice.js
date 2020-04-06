import axios from 'utils/axios.js'
import { IS_MOCK } from './config.js'

// 分页获取中心列表
export function getNoticeList (params) {
  return axios.get(`/mock/notice/list${ IS_MOCK ? '' : '.json' }`, {
    params: params
  })
}

// 单个消息已读
export function noticeReadOne (data) {
  return axios.post('/mock/notice/read', data)
}

// 单个消息删除
export function noticeNoticeDelete (data) {
  return axios.post('/mock/notice/delete', data)
}

// 全部消息已读
export function noticeReadAll (data) {
  return axios.post('/mock/notice/read/all', data)
}

// 获取消息中心设置
export function getNoticeSetting () {
  return axios.get('/mock/notice/setting.json')
}