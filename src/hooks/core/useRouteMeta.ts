import { useRoute } from 'vue-router'
import { reactive, toRefs, watch } from 'vue'
import { AppRouteMetaConfig } from '@/types'

export function useRouteMeta () {
  const route = useRoute()
  const meta = reactive<AppRouteMetaConfig>(route.meta)
  watch(() => route.meta, (newMeta: AppRouteMetaConfig) => {
    meta.hideHeader = newMeta.hideHeader
    meta.hideFooter = newMeta.hideFooter
    meta.hideSidebar = newMeta.hideSidebar
  })
  const { hideHeader, hideFooter, hideSidebar } = toRefs(meta)
  return {
    hideHeader,
    hideFooter,
    hideSidebar
  }
}
