import { RouteRecordRaw } from 'vue-router'

export interface AppRouteMetaConfig {
  title?: string;
  auth?: boolean;
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideSidebar?: boolean;
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  meta?: AppRouteMetaConfig;
}
