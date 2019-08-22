module.exports = {
  title: 'vue-mooc',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  cache: false,
  port: 3480,
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    repo: 'https://github.com/wangtunan/vue-mooc',
    repoLabel: 'Github',
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '储备知识',
        link: '/base/'
      },
      {
        text: '基础组件',
        link: '/components/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '前言',
          collapsable: false,
          children: [
            '/guide/',
            '/guide/forceword.md'
          ]
        },
        {
          title: "基础",
          collapsable: false,
          children: [
            '/guide/start.md',
            '/guide/mock.md'
          ]
        }
      ]
    }
  }
}