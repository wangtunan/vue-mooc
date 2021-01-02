import { App } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElButton,
  ElBadge,
  ElMessage
} from 'element-plus'

const components = [
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElButton,
  ElBadge
]

const plugins = [ElMessage]

export function setupElementPlus (app: App<any>) {
  components.forEach(component => {
    app.use(component)
  })
  plugins.forEach(plugin => {
    // @ts-ignore
    app.use(plugin)
  })
}
