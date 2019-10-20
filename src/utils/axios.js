import axios from 'axios'
import  components  from '../register.js'
import { ERR_OK } from 'api/config.js'
import { BASE_URL, IS_MOCK_LOCAL } from 'api/config.js'
const Message = components.Message
const service = axios.create({
  baseURL: IS_MOCK_LOCAL ? '' : BASE_URL,
  timeout: 10000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//响应拦截
service.interceptors.response.use(
  response => {
    let {status, data} = response
    if (status !== 200) {
      Message.error('网络异常，请刷新或者重试!')
      return Promise.reject('网络异常!')
    }
    if (data.code !== ERR_OK) {
      Message.error(data.msg || '接口请求异常，请重试!')
      return Promise.reject(data.msg || '接口异常!')
    }
    return Promise.resolve(data)
  },
  error => {
    return Promise.reject(error)
  }
)

export default service