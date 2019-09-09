import Badge from './badge.vue'

Badge.install = function (Vue) {
  Vue.component(Badge.name, Badge)
}

export default Badge