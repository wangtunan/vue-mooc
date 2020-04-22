import storage from 'good-storage'
const user_info_prefix = 'vue_mooc_user'
const cart_check_prefix = 'vue_mooc-cart'

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


// 购物车勾选的课程
export function setCheckLessons (list) {
  storage.set(cart_check_prefix, list)
}
export function getCheckLessons () {
  return storage.get(cart_check_prefix, [])
}
export function removeCheckLessons () {
  return storage.remove(cart_check_prefix)
}
