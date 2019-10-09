import Vue from 'vue'
import Message from './components/message/message.js'
import './stylus/iconfont.css'

Vue.prototype.$message = Message
export default({
  Vue,
  options, 
  router
}) => {
  Register()
}
function Register () {
  const files = require.context('./components', true, /.vue$/)
  files.keys().forEach((key) => {
    let fileUrl = `./components${key.substring(1)}`
    import(fileUrl+'').then(res => {
      let { default: component } = res
      if (component.name) {
        Vue.component(component.name, component)
      }
    })
  })
}