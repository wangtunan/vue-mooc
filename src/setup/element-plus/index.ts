import { ElButton } from 'element-plus'
import { App } from 'vue'

export function setupElementPlus (app: App<Element>) {
  app.use(ElButton)
}
