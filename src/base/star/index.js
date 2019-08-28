import Star from './star.vue'

Star.install = function (Vue) {
  Vue.component(Star.name, Star)
}

export default Star