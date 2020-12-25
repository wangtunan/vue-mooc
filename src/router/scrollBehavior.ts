import { RouteLocation } from 'vue-router'

export function scrollBehavior (to: RouteLocation, from: RouteLocation, savedPosition: any) {
  if (savedPosition) {
    return savedPosition
  }
  return { left: 0, top: 0 }
}
