import axios from '@/utils/axios'
import { FooterLinkConfig, HeaderNavConfig, MoocResponseConfig, SidebarItemConfig } from '@/types'

// header navigation list
export function getHeaderNav (): Promise<MoocResponseConfig<HeaderNavConfig[]>> {
  return axios.get('/api/mock/common/header.json')
}

// footer link list
export function getFooterLink (): Promise<MoocResponseConfig<FooterLinkConfig[]>> {
  return axios.get('/api/mock/common/footer.json')
}

// sidebar list
export function getSidebar (): Promise<MoocResponseConfig<SidebarItemConfig[]>> {
  return axios.get('/api/mock/common/sidebar.json')
}
