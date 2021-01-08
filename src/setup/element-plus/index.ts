import { App } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElButton,
  ElBadge,
  ElMessage,
  ElTable,
  ElTableColumn
} from 'element-plus'

const components = [
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElButton,
  ElBadge,
  ElTable,
  ElTableColumn
]

const plugins = [ElMessage]

export function setupElementPlus (app: App<any>) {
  components.forEach(component => {
    app.use(component as any)
  })
  plugins.forEach(plugin => {
    // @ts-ignore
    app.use(plugin)
  })
}
