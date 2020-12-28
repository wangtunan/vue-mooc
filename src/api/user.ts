import { LoginParams, MoocResponseConfig } from '@/types'
import axios from '@/utils/axios'

export function userLogin (params: LoginParams): Promise<MoocResponseConfig<string>> {
  const { account, password } = params
  if (account && password) {
    return axios.get('/api/mock/user/login.json')
  } else {
    const result = { code: -1, msg: '用户名或密码错误', data: null }
    return Promise.resolve(result)
  }
}
