import { ComponentInternalInstance, getCurrentInstance } from 'vue'

export function useAppConfig () {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance
  return appContext.config.globalProperties
}
