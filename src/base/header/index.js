import Header from './header.vue'

Header.install = function (Vue) {
  Vue.component(Header.name, Header)
}

export default Header