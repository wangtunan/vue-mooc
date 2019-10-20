import Container from 'base/container/index.js'
import Header from 'base/header/index.js'
import Main from 'base/main/index.js'
import Footer from 'base/footer/index.js'
import Star from 'base/star/index.js'
import Badge from 'base/badge/index.js'
import Switch from 'base/switch/index.js'
import Timeline from 'base/timeline/index.js'
import TimelineItem from 'base/timeline-item/index.js'
import Progress from 'base/progress/index.js'
import Pagination from 'base/pagination/index.js'
import Step from 'base/step/index.js'
import StepItem from 'base/step-item/index.js'
import Breadcrumb from 'base/breadcrumb/index.js'
import BreadcrumbItem from 'base/breadcrumb-item/index.js'
import Message from 'base/message/index.js'
import MessageBox from 'base/message-box/index.js'
import BackTop from 'base/back-top/index.js'
import Button from 'base/button/index.js'
import ButtonGroup from 'base/button-group/index.js'
import Carousel from 'base/carousel/index.js'
import CarouselItem from 'base/carousel-item/index.js'
import Dialog from 'base/dialog/index.js'
import Divider from 'base/divider/index.js'

const components = [
  Container,
  Header,
  Main,
  Footer,
  Star,
  Badge,
  Switch,
  Timeline,
  TimelineItem,
  Progress,
  Pagination,
  Step,
  StepItem,
  Breadcrumb,
  BreadcrumbItem,
  BackTop,
  Button,
  ButtonGroup,
  Carousel,
  CarouselItem,
  Dialog,
  Divider
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$message = Message
  Vue.prototype.$moocMsgbox = MessageBox
  Vue.prototype.$moocAlert = MessageBox.alert
  Vue.prototype.$moocConfirm = MessageBox.confirm
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Container,
  Header,
  Main,
  Footer,
  Star,
  Badge,
  Switch,
  Timeline,
  TimelineItem,
  Progress,
  Pagination,
  Step,
  StepItem,
  Breadcrumb,
  BreadcrumbItem,
  Message,
  MessageBox,
  BackTop,
  Button,
  ButtonGroup,
  Dialog,
  Divider
}