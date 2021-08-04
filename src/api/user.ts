import { BindingConfig, LoginParams, MoocListResponseConfig, MoocResponseConfig, UserInfo } from '@/types'
import axios from '@/utils/axios'

// user login 用户登录
export function userLogin (params: LoginParams): Promise<MoocResponseConfig<string>> {
  const { account, password } = params
  if (account && password) {
    return axios.get('/api/mock/user/login.json')
  } else {
    const result = { code: -1, msg: '用户名或密码错误', data: '' }
    return Promise.resolve(result)
  }
}

// user register 用户注册
export function userRegister (params: LoginParams): Promise<MoocResponseConfig<string>> {
  const { account, password } = params
  if (account && password) {
    return axios.get('/api/mock/user/register.json')
  } else {
    const result = { code: -1, msg: '用户名或密码不能为空', data: '' }
    return Promise.resolve(result)
  }
}

// get user info 获取用户详情
export function getUserInfo (token: string): Promise<MoocResponseConfig<UserInfo>> {
  return axios.get(`/auth/mock/user/info.json?token=${token}`)
}

// get user binding 获取用户绑定信息
export function getUserBinding (): Promise<MoocResponseConfig<BindingConfig>> {
  return axios.get('/auth/mock/user/binding.json')
}

// get user logs 获取用户登陆日志
export function getUserLogs<T> (): Promise<MoocResponseConfig<MoocListResponseConfig<T>>> {
  return axios.get('/auth/mock/user/log.json')
}

// get user address 获取用户地址
export function getUserAddresses<T> (): Promise<MoocResponseConfig<T>> {
  return axios.get('/auth/mock/user/address.json')
}
