import BreadCrumb from './breadcrumb.vue'

BreadCrumb.install = function (Vue) {
  Vue.component(BreadCrumb.name, BreadCrumb)
}

export default BreadCrumb