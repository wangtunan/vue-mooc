import Star from 'base/star/index.js'
import Badge from 'base/badge/index.js'
import Switch from 'base/switch/index.js'
import Timeline from 'base/timeline/index.js'
import TimelineItem from 'base/timeline-item/index.js'
import Progress from 'base/progress/index.js'
import Step from 'base/step/index.js'
import StepItem from 'base/step-item/index.js'
import Breadcrumb from 'base/breadcrumb/index.js'
import BreadcrumbItem from 'base/breadcrumb-item/index.js'

const components = [
  Star,
  Badge,
  Switch,
  Timeline,
  TimelineItem,
  Progress,
  Step,
  StepItem,
  Breadcrumb,
  BreadcrumbItem
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Star,
  Badge,
  Switch,
  Timeline,
  TimelineItem,
  Progress,
  Step,
  StepItem,
  Breadcrumb,
  BreadcrumbItem
}