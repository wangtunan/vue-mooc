import storage from 'good-storage'
const user_info_prefix = 'vue_mooc_user'

// 用户信息模块
export function setUserInfo (userinfo) {
  storage.set(user_info_prefix, userinfo)
}
export function getUserInfo () {
  return storage.get(user_info_prefix, {})
}
export function removeUserInfo () {
  return storage.remove(user_info_prefix)
}
