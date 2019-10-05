import Vue from 'vue'
import './stylus/iconfont.css'
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
      Vue.component(component.name, component)
    })
  })
}