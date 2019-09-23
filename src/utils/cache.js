import storage from 'good-storage'
const user_info_prefix = 'vue_mooc_user'
const user_address_prefix = 'vue_mooc_user_address'

// 用户模块
export function setUserInfo (userinfo) {
  storage.set(user_info_prefix, userinfo)
}
export function getUserInfo () {
  return storage.get(user_info_prefix, {})
}
export function setUserAddress (address) {
  storage.set(user_address_prefix, address)
}
export function getUserAddress () {
  return storage.get(user_address_prefix, [])
}