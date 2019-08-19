module.exports = {
  themeConfig: {
    head: [
      ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    repo: 'https://github.com/wangtunan/vue-mooc',
    repoLabel: 'Github',
    port: 3480,
    nav: [
      {
        text: '基础知识',
        link: '/base/'
      },
      {
        text: '公共组件',
        link: '/common/'
      }
    ]
  }
}