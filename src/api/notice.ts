import { MoocResponseConfig, MoocListResponseConfig } from '@/types'
import axios from '@/utils/axios'

// notice list
export function getNoticeList<T> (): Promise<MoocResponseConfig<MoocListResponseConfig<T>>> {
  return axios.get('/auth/mock/notice/list.json')
}
