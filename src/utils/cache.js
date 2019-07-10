import storage from 'good-storage'

// 用户模块
const user_prefix = 'vue_mooc_userinfo'
export function setUserInfo (userinfo) {
  storage.set(user_prefix, userinfo)
}
export function getUserInfo() {
  return storage.get(user_prefix, {})
}