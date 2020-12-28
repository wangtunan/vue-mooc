import { UserState } from '@/types/index'

export const token = (state: any) => (state.user as UserState).token

export const userInfo = (state: any) => (state.user as UserState).userInfo
