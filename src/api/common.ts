import axios from '@/utils/axios'
import { FooterLinkConfig, HeaderNavConfig, MoocResponseConfig } from '@/types'

// header navigation list
export function getHeaderNav (): Promise<MoocResponseConfig<HeaderNavConfig[]>> {
  return axios.get('/api/mock/common/header.json')
}

// footer link list
export function getFooterLink (): Promise<MoocResponseConfig<FooterLinkConfig[]>> {
  return axios.get('/api/mock/common/footer.json')
}
