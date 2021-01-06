// header导航数组类型
export interface HeaderNavConfig {
  title: string;
  url?: string;
}

// footer链接数组类型
export interface FooterLinkConfig extends HeaderNavConfig {
  target?: string;
}

// sidebar数组类型
export interface SidebarItemConfig extends HeaderNavConfig {
  icon: string;
}

// login or register参数
export interface LoginParams {
  account: string;
  password: string;
}

// userInfo类型
export interface UserInfo {
  uid: string | number;
  avatar?: string;
  nickname?: string;
  job?: string;
  integral?: number | string;
  exp?: number | string;
  city?: string;
  signature?: string;
  notice?: number | string;
  latest?: any;
}

export interface NoticeConfig {
  isRead: boolean;
  code: number;
  title: string;
  time: string;
}
