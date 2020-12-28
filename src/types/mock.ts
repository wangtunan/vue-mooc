// header导航数组类型
export interface HeaderNavConfig {
  title: string;
  url?: string;
}

// footer 链接数组类型
export interface FooterLinkConfig extends HeaderNavConfig {
  target?: string;
}

// sidebar数组类型
export interface SidebarItemConfig extends HeaderNavConfig {
  icon: string;
}
