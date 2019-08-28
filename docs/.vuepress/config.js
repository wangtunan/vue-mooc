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
      ],
      '/components/': [
        {
          title: '介绍',
          collapsable: false,
          children: [
            '/components/',
          ]
        },
        {
          title: '基础公共组件',
          collapsable: false,
          children: [
            '/components/base/star.md',
            '/components/base/badge.md',
            '/components/base/switch.md',
            '/components/base/message.md',
            '/components/base/message-box.md',
            '/components/base/pagination.md',
            '/components/base/swiper.md',
            '/components/base/breadcrumb.md',
            '/components/base/backtop.md'
          ]
        },
        {
          title: '业务公共组件',
          collapsable: false,
          children: [
            '/components/business/header.md',
            '/components/business/footer.md',
            '/components/business/sidebar.md',
            '/components/business/canvas-blur.md',
            '/components/business/empty.md',
            '/components/business/rem-lesson.md',
            '/components/business/chapter.md',
            '/components/business/comment.md'
          ]
        }
      ]
    }
  }
}