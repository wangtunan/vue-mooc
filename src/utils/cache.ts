import { UserInfo } from '@/types'
import storage from 'good-storage'
const tokenPrefix = 'mooc_token'
const userInfoPrefix = 'mooc_user_info'

// token cache
export function setToken (token: string): string {
  storage.set(tokenPrefix, token)
  return token
}
export function getToken (): string {
  return storage.get(tokenPrefix, '')
}
export function removeToken () {
  storage.remove(tokenPrefix)
}

// userInfo cacje
export function setUserInfo (userInfo: UserInfo): UserInfo {
  storage.set(userInfoPrefix, userInfo)
  return userInfo
}
export function getUserInfo (): UserInfo {
  return storage.get(userInfoPrefix, {})
}
export function removeUserInfo () {
  storage.remove(userInfoPrefix)
}
