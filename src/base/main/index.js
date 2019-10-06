import Main from './main.vue'

Main.install = function (Vue) {
  Vue.component(Main.name, Main)
}

export default Main