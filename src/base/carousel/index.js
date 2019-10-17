import Carousel from './carousel.vue'

Carousel.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
}

export default Carousel