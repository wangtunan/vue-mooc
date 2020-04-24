const labelData = [
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: 'HTML/CSS',
    sort: 0
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: 'JavaScript',
    sort: 1
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: 'TypeScript',
    sort: 2
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: 'Vue.js',
    sort: 2
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: 'React.js',
    sort: 3
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: 'Angular',
    sort: 4
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: 'Node.js',
    sort: 5
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: 'jQuery',
    sort: 6
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: 'Sass/Less',
    sort: 7
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: 'WebApp',
    sort: 8
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: '小程序',
    sort: 9
  },
  {
    type: {
      text: '前端开发',
      code: 0
    },
    title: '前端工具',
    sort: 10
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'Java',
    sort: 0
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'SpringBoot',
    sort: 1
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'Spring Cloud',
    sort: 2
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'SSM',
    sort: 3
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'Python',
    sort: 4
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: '爬虫',
    sort: 5
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'Django',
    sort: 6
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'Flask',
    sort: 7
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'Tornado',
    sort: 8
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'Go',
    sort: 9
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'PHP',
    sort: 10
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'Swoole',
    sort: 11
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'C',
    sort: 12
  },
  {
    type: {
      text: '后端开发',
      code: 1
    },
    title: 'C++',
    sort: 13
  },
  {
    type: {
      text: '移动端开发',
      code: 2
    },
    title: 'Android',
    sort: 0
  },
  {
    type: {
      text: '移动端开发',
      code: 2
    },
    title: 'iOS',
    sort: 1
  },
  {
    type: {
      text: '移动端开发',
      code: 2
    },
    title: 'React native',
    sort: 2
  },
  {
    type: {
      text: '移动端开发',
      code: 2
    },
    title: 'Ionic',
    sort: 3
  },
  {
    type: {
      text: '移动端开发',
      code: 2
    },
    title: 'Flutter',
    sort: 4
  },
  {
    type: {
      text: '移动端开发',
      code: 2
    },
    title: 'Weex',
    sort: 5
  },
  {
    type: {
      text: '计算机基础',
      code: 3
    },
    title: '计算机网络',
    sort: 0
  },
  {
    type: {
      text: '计算机基础',
      code: 3
    },
    title: '算法与数据结构',
    sort: 1
  },
  {
    type: {
      text: '计算机基础',
      code: 3
    },
    title: '数学',
    sort: 2
  },
  {
    type: {
      text: '前沿技术',
      code: 4
    },
    title: '微服务',
    sort: 0
  },
  {
    type: {
      text: '前沿技术',
      code: 4
    },
    title: '区块链',
    sort: 1
  },
  {
    type: {
      text: '前沿技术',
      code: 4
    },
    title: '机器学习',
    sort: 2
  },
  {
    type: {
      text: '前沿技术',
      code: 4
    },
    title: '深度学习',
    sort: 3
  },
  {
    type: {
      text: '前沿技术',
      code: 4
    },
    title: '计算机视觉',
    sort: 5
  },
  {
    type: {
      text: '前沿技术',
      code: 4
    },
    title: '自然语言处理',
    sort: 6
  },
  {
    type: {
      text: '前沿技术',
      code: 4
    },
    title: '数据分析&挖掘',
    sort: 7
  },
  {
    type: {
      text: '云计算&大数据',
      code: 5
    },
    title: '大数据',
    sort: 0
  },
  {
    type: {
      text: '云计算&大数据',
      code: 5
    },
    title: 'Hadoop',
    sort: 1
  },
  {
    type: {
      text: '云计算&大数据',
      code: 5
    },
    title: 'Spark',
    sort: 2
  },
  {
    type: {
      text: '云计算&大数据',
      code: 5
    },
    title: 'Hbase',
    sort: 3
  },
  {
    type: {
      text: '云计算&大数据',
      code: 5
    },
    title: 'Flink',
    sort: 4
  },
  {
    type: {
      text: '云计算&大数据',
      code: 5
    },
    title: 'Storm',
    sort: 5
  },
  {
    type: {
      text: '云计算&大数据',
      code: 5
    },
    title: '阿里云',
    sort: 6
  },
  {
    type: {
      text: '云计算&大数据',
      code: 5
    },
    title: 'Docker',
    sort: 7
  },
  {
    type: {
      text: '云计算&大数据',
      code: 5
    },
    title: 'Kubernetes',
    sort: 8
  },
  {
    type: {
      text: '运维&测试',
      code: 6
    },
    title: '运维',
    sort: 0
  },
  {
    type: {
      text: '运维&测试',
      code: 6
    },
    title: '自动化运维',
    sort: 1
  },
  {
    type: {
      text: '运维&测试',
      code: 6
    },
    title: '中间件',
    sort: 2
  },
  {
    type: {
      text: '运维&测试',
      code: 6
    },
    title: 'Linux',
    sort: 3
  },
  {
    type: {
      text: '运维&测试',
      code: 6
    },
    title: '测试',
    sort: 4
  },
  {
    type: {
      text: '运维&测试',
      code: 6
    },
    title: '功能测试',
    sort: 5
  },
  {
    type: {
      text: '运维&测试',
      code: 6
    },
    title: '性能测试',
    sort: 6
  },
  {
    type: {
      text: '运维&测试',
      code: 6
    },
    title: '自动化测试',
    sort: 7
  },
  {
    type: {
      text: '运维&测试',
      code: 6
    },
    title: '接口测试',
    sort: 8
  },
  {
    type: {
      text: '数据库',
      code: 7
    },
    title: 'MySQL',
    sort: 0
  },
  {
    type: {
      text: '数据库',
      code: 7
    },
    title: 'Redis',
    sort: 1
  },
  {
    type: {
      text: '数据库',
      code: 7
    },
    title: 'MongoDB',
    sort: 2
  },
  {
    type: {
      text: 'UI设计&多媒体',
      code: 8
    },
    title: '动效动画',
    sort: 0
  },
  {
    type: {
      text: 'UI设计&多媒体',
      code: 8
    },
    title: '设计基础',
    sort: 1
  },
  {
    type: {
      text: 'UI设计&多媒体',
      code: 8
    },
    title: '设计工具',
    sort: 2
  },
  {
    type: {
      text: 'UI设计&多媒体',
      code: 8
    },
    title: 'APPUI设计',
    sort: 3
  },
  {
    type: {
      text: 'UI设计&多媒体',
      code: 8
    },
    title: '产品交互',
    sort: 4
  }
]

export default labelData
