import axios from 'axios'
import  components  from '../register.js'
const Message = components.Message
const service = axios.create({
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
    return Promise.resolve(data)
  },
  error => {
    return Promise.reject(error)
  }
)

export default service