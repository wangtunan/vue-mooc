import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { baseURL } from '@/api/config'
import Message from 'element-plus/lib/el-message'
const instance = axios.create({
  timeout: 10000,
  baseURL: baseURL
})

// 请求拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  // add token TDD
  return config
})

// 相应拦截
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
