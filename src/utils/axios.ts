import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import Message from 'element-plus/lib/el-message'
import { getToken } from './cache'
import { baseURL } from '@/api/config'
const instance = axios.create({
  timeout: 10000,
  baseURL: baseURL
})

// 请求拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  // add token TDD
  const { url } = config
  if (url?.indexOf('/auth') !== -1) {
    config.headers.token = getToken()
  }
  return config
})

// 响应拦截
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response
    if (status !== 200) {
      return Promise.reject(data)
    } else {
      return Promise.resolve(data)
    }
  },
  (err: AxiosError) => {
    Message.error(err.message || '接口请求异常')
  }
)

export default instance
