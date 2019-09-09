import Switch from './switch.vue'

Switch.install = function (Vue) {
  Vue.component(Vue.name, Switch)
}

export default Switch