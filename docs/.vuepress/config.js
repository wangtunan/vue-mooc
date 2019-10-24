module.exports = {
  title: 'vue-mooc',
  description: '使用Vue全家桶，高防慕课网PC端项目',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  base: '/vue-mooc-site/',
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
        text: '组件文档',
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
            '/guide/forceword/'
          ]
        },
        {
          title: "基础",
          collapsable: false,
          children: [
            '/guide/basic/start.md',
            '/guide/basic/mock.md',
            '/guide/basic/vuex.md',
            '/guide/basic/router.md'
          ]
        },
        {
          title: "基础组件封装",
          collapsable: false,
          children: [
            '/guide/components/',
            '/guide/components/star.md',
            '/guide/components/badge.md',
            '/guide/components/switch.md',
            '/guide/components/timeline.md',
            '/guide/components/progress.md',
            '/guide/components/steps.md',
            '/guide/components/breadcrumb.md',
            '/guide/components/backtop.md',
            '/guide/components/button.md',
            '/guide/components/message.md',
            '/guide/components/message-box.md',
            '/guide/components/carousel.md',
            '/guide/components/pagination.md',
            '/guide/components/dialog.md',
            '/guide/components/divider.md'
          ]
        },
        {
          title: "开发",
          collapsable: false,
          children: [
            '/guide/develop/layout.md',
            '/guide/develop/login.md',
            '/guide/develop/home.md',
            '/guide/develop/course.md',
            '/guide/develop/lesson.md',
            '/guide/develop/read.md',
            '/guide/develop/question.md',
            '/guide/develop/article.md',
            '/guide/develop/cart.md'
          ]
        },
        {
          title: "部署",
          collapsable: false,
          children: [
            '/guide/depoly/'
          ]
        },
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
            '/components/base/timeline.md',
            '/components/base/progress.md',
            '/components/base/steps.md',
            '/components/base/breadcrumb.md',
            '/components/base/backtop.md',
            '/components/base/button.md',
            '/components/base/message.md',
            '/components/base/message-box.md',
            '/components/base/carousel.md',
            '/components/base/pagination.md',
            '/components/base/dialog.md',
            '/components/base/divider.md'
          ]
        },
        {
          title: '业务公共组件',
          collapsable: false,
          children: [
            '/components/business/sidebar.md',
            '/components/business/empty.md',
            '/components/business/canvas-blur.md',
            '/components/business/rem-lesson.md',
            '/components/business/chapter.md',
            '/components/business/comment.md'
          ]
        }
      ]
    }
  }
}