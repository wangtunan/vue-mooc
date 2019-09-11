import Progress from './progress.vue'

Progress.install = function (Vue) {
  Vue.components(Progress.name, Progress)
}

export default Progress