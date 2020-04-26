const lessonData = [
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'TypeScript  系统入门到项目实战 趁早学习提高职场竞争力',
    introduction: 'Dell老师专为TypeScript小白打造的，全栈式教学TS入门课程',
    img: 'https://img.mukewang.com/szimg/5e1d990f0885d97306000338-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5e1d991809c5318e40000800.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 266,
    isDiscount: true,
    discountPrice: 216,
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    },
    labels: ['TypeScript']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: '前端要学的测试课 从Jest入门到 TDD/BDD双实战',
    introduction: '以Vue/React项目进行自动化测试实战，让你技术水平和架构思维双提升',
    img: 'https://img.mukewang.com/szimg/5d36a6000837a91d06000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5d36a60709f5666320000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 299,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    },
    labels: ['Vue.js', 'React.js']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: '从基础到实战 手把手带你掌握新版Webpack4.0',
    introduction: '知识点+项目实例+原理讲解 全方位解析Webpack4最新版本',
    img: 'https://img.mukewang.com/szimg/5c6bdb3e08e4674a06000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5c6bdb4f09c2401020000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 299,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    },
    labels: ['Vue.js', 'React.js']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'React服务器渲染原理解析与实践',
    introduction: '从零开始，带你搭建属于自己的React SSR框架，从根本上解决客户端渲染问题 。',
    img: 'https://img.mukewang.com/szimg/5ba07190000135b505400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5c6bdb4f09c2401020000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 299,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    },
    labels: ['React.js']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'React开发简书项目 从零基础入门到实战 ',
    introduction: '主流新技术 React-redux，React-router4，贯穿基础语法及项目实战。',
    img: 'https://img.mukewang.com/szimg/5b3082da0001d7e905400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b508ba90001116220000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 299,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    },
    labels: ['React.js']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: '经典再升级-新版Vue2.6开发去哪儿网App 从零基础入门到实战项目',
    introduction: '基于Vue最新版本，从基础语法到完整项目，一课掌握Vue基础知识点',
    img: 'https://img.mukewang.com/szimg/5b3082da0001d7e905400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b50858100011b9220000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 266,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    },
    labels: ['Vue.js']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: '下一代前端开发语言 TypeScript从零重构axios',
    introduction: '掌握TS，学习vue3.0源码必备基础！课程从零开始重构功能完整的JS库，是学习造轮子的不二之选！',
    img: 'https://img.mukewang.com/szimg/5cbf00c608f52a3b06000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5cbf00cb092626c820000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 388,
    isDiscount: true,
    discountPrice: 348,
    teacher: {
      name: 'ustbhuangyi',
      avatar: 'https://img.mukewang.com/user/577baef700019c4501400140-100-100.jpg',
      job: 'Web前端工程师',
      introduction: '曾任职百度、滴滴，现担任Zoom前端架构师，推进前后端分离架构方案，同时负责 Zoom 自研组件库。公众号《老黄的前端私房菜》，《Vue.js 技术揭秘》独立作者，《Vue.js 权威指南》主要作者，开源项目 better-scroll 作者。曾主导滴滴开源项目 cube-ui，建立团队技术博客。'
    },
    labels: ['TypeScript']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'Vue.js2.5+cube-ui重构饿了么App（经典再升级）',
    introduction: '掌握Vue1.0到2.0再到2.5最全版本应用与迭代，打造极致流畅的WebApp',
    img: 'https://img.mukewang.com/szimg/5becd5ad0001b89306000338-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5becd5bc0001d45120000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 198,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'ustbhuangyi',
      avatar: 'https://img.mukewang.com/user/577baef700019c4501400140-100-100.jpg',
      job: 'Web前端工程师',
      introduction: '曾任职百度、滴滴，现担任Zoom前端架构师，推进前后端分离架构方案，同时负责 Zoom 自研组件库。公众号《老黄的前端私房菜》，《Vue.js 技术揭秘》独立作者，《Vue.js 权威指南》主要作者，开源项目 better-scroll 作者。曾主导滴滴开源项目 cube-ui，建立团队技术博客。'
    },
    labels: ['Vue.js']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'Vue.js源码全方位深入解析 （含Vue3.0源码分析）',
    introduction: '全方位讲解 Vue.js 源码，学精学透 Vue 原理实现，进阶高级工程师',
    img: 'https://img.mukewang.com/szimg/5b17bad10001535305400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5b508b4200014f8a20000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '高级',
      code: 3,
    },
    price: 488,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'ustbhuangyi',
      avatar: 'https://img.mukewang.com/user/577baef700019c4501400140-100-100.jpg',
      job: 'Web前端工程师',
      introduction: '曾任职百度、滴滴，现担任Zoom前端架构师，推进前后端分离架构方案，同时负责 Zoom 自研组件库。公众号《老黄的前端私房菜》，《Vue.js 技术揭秘》独立作者，《Vue.js 权威指南》主要作者，开源项目 better-scroll 作者。曾主导滴滴开源项目 cube-ui，建立团队技术博客。'
    },
    labels: ['Vue.js']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: 'Python Flask高级编程之RESTFul API前后端分离精讲',
    introduction: 'RESTFul+权限管理+token令牌+扩展flask=提升编程思维',
    img: 'https://img.mukewang.com/szimg/5b061fe30001db4505400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5be39cb6000127a520000559.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 148,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '7七月',
      avatar: 'https://img.mukewang.com/user/54584e2c00010a2c02200220-100-100.jpg',
      job: '全栈工程师',
      introduction: '十年研发及团队管理经验，对程序员面临的各种问题深有体会；精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。课程讲解深入浅出，极为擅长培养学生的编程思维。'
    },
    labels: ['Python']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: 'Python Flask高级编程之从0到1开发《鱼书》精品项目',
    introduction: '7月老师深入浅出剖析Flask核心机制，和你一起探讨Python高级编程',
    img: 'https://img.mukewang.com/szimg/5ab84f650001f0b005400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b51c78300015e0220000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 399,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '7七月',
      avatar: 'https://img.mukewang.com/user/54584e2c00010a2c02200220-100-100.jpg',
      job: '全栈工程师',
      introduction: '十年研发及团队管理经验，对程序员面临的各种问题深有体会；精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。课程讲解深入浅出，极为擅长培养学生的编程思维。'
    },
    labels: ['Python']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: '全面系统Python3.8入门+进阶  (程序员必备第二语言)',
    introduction: '语法精讲/配套练习+思考题/原生爬虫实战',
    img: 'https://img.mukewang.com/szimg/59b8a486000107fb05400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b51c78300015e0220000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '初级',
      code: 1,
    },
    price: 366,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '7七月',
      avatar: 'https://img.mukewang.com/user/54584e2c00010a2c02200220-100-100.jpg',
      job: '全栈工程师',
      introduction: '十年研发及团队管理经验，对程序员面临的各种问题深有体会；精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。课程讲解深入浅出，极为擅长培养学生的编程思维。'
    },
    labels: ['Python']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: 'Spring Cloud微服务实战 打造企业级优惠券系统',
    introduction: '面试、毕设、升职优选：从0开始，Java主流框架，构建电商都在用的优惠券系统',
    img: 'https://img.mukewang.com/szimg/5d5f7da0093eb24212000676-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5d5f7da709b71ad320000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 299,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '勤一',
      avatar: 'https://img.mukewang.com/user/5c36c432000158e609600960-100-100.jpg',
      job: 'Java开发工程师',
      introduction: '高级技术专家，曾就职于微软、腾讯，目前就职于知名电商互联网公司，拥有丰富的大型项目开发经验。多年IT从业经验，一线软件设计、研发，熟悉C、CPP、Java等开发语言，对Web框架、数据存储、架构设计等有深入的理解和实践。'
    },
    labels: ['Java', 'Spring Cloud']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: '基于Spring Cloud微服务架构  广告系统设计与实现（2020新版）',
    introduction: '掌握互联网广告系统，学会为公司创收，你自然就是最抢手的人才。可用于毕设。',
    img: 'https://img.mukewang.com/szimg/5d2e7ada09946f6f12000676-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5d2e7ae20942ca4d20000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 299,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '勤一',
      avatar: 'https://img.mukewang.com/user/5c36c432000158e609600960-100-100.jpg',
      job: 'Java开发工程师',
      introduction: '高级技术专家，曾就职于微软、腾讯，目前就职于知名电商互联网公司，拥有丰富的大型项目开发经验。多年IT从业经验，一线软件设计、研发，熟悉C、CPP、Java等开发语言，对Web框架、数据存储、架构设计等有深入的理解和实践。'
    },
    labels: ['Java', 'Spring Cloud']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: 'Java分布式后台开发  Spring Boot+Kafka+HBase',
    introduction: '从零到一完整搭建企业级架构的通用卡包工程，让你开发技迈向到百度T4+ 。',
    img: 'https://img1.sycdn.imooc.com/szimg/5b55356c0001af0105400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b5535400001b72e20000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 299,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '勤一',
      avatar: 'https://img.mukewang.com/user/5c36c432000158e609600960-100-100.jpg',
      job: 'Java开发工程师',
      introduction: '高级技术专家，曾就职于微软、腾讯，目前就职于知名电商互联网公司，拥有丰富的大型项目开发经验。多年IT从业经验，一线软件设计、研发，熟悉C、CPP、Java等开发语言，对Web框架、数据存储、架构设计等有深入的理解和实践。'
    },
    labels: ['Java', 'SpringBoot']
  },
  {
    category: {
      text: '移动端开发',
      code: 2,
    },
    title: 'Flutter从入门到进阶 实战携程网App',
    introduction: '从入门到进阶，系统掌握Flutter开发核心技术',
    img: 'https://img.mukewang.com/szimg/5c7e6835087ef3d806000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5c9304cd097d093d20000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 348,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'CrazyCodeBoy',
      avatar: 'https://img.mukewang.com/user/545847e20001163c02200220-100-100.jpg',
      job: '移动端开发工程师',
      introduction: '深耕移动端领域8年有余，全栈技术专家，CSDN 博客专家，擅长Android、iOS、Flutter、React Native以及小程序项目开发，负责过前端、Java、Android、iOS等多平台项目的研发，有多款React Native App上线及管理经验。他享受编程、热爱开源、酷爱分享，平时除了写写博客外，也分享一些开源技术干货 · Github'
    },
    labels: ['React native', 'Flutter']
  },
  {
    category: {
      text: '移动端开发',
      code: 2,
    },
    title: '新版React Native从入门到实战打造高质量上线App（再升级）',
    introduction: '解锁React Native开发应用新姿势，一网打尽React Native新版本热门技术',
    img: 'https://img.mukewang.com/szimg/5db6916d08d81b8b12000676-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5db69b9c086653ff40001120.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 399,
    isDiscount: false,
    discountPrice: 0,
    script: {
      text: '升级',
      code: 1
    },
    teacher: {
      name: 'CrazyCodeBoy',
      avatar: 'https://img.mukewang.com/user/545847e20001163c02200220-100-100.jpg',
      job: '移动端开发工程师',
      introduction: '深耕移动端领域8年有余，全栈技术专家，CSDN 博客专家，擅长Android、iOS、Flutter、React Native以及小程序项目开发，负责过前端、Java、Android、iOS等多平台项目的研发，有多款React Native App上线及管理经验。他享受编程、热爱开源、酷爱分享，平时除了写写博客外，也分享一些开源技术干货 · Github'
    },
    labels: ['React native']
  },
  {
    category: {
      text: '移动端开发',
      code: 2,
    },
    title: '实战企业级项目 践行App重构之路',
    introduction: '真实还原大厂App重构过程，以组件化和插件化为核心，进击高级工程师必备',
    img: 'https://img.mukewang.com/szimg/5e4f4f66098b14c512000676-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5e4f4f7009aeb1a920000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 299,
    isDiscount: false,
    discountPrice: 0,
    script: {
      text: '升级',
      code: 1
    },
    teacher: {
      name: 'qndroid',
      avatar: 'http://img3.sycdn.imooc.com/5333a0350001692e02200220-160-160.jpg',
      job: '移动开发工程师',
      introduction: '多年Android开发经验，曾任职于优酷等一线互联网企业，现就职于快手基础架构部，有丰富的Android应用架构和SDK开发经验，喜欢分享，授课风格循序渐进，擅长培养学生的编程思维，深受学员好评。'
    },
    labels: ['Android']
  },
  {
    category: {
      text: '移动端开发',
      code: 2,
    },
    title: '企业级Android应用架构设计与开发',
    introduction: '一门能助你掌握企业级架构设计、功能开发，冲击大厂Android中高级工程师职位的课程',
    img: 'https://img.mukewang.com/szimg/5d5e6d1f0983ee0112000676-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5d5e6d2809b8706c20000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 299,
    isDiscount: false,
    discountPrice: 0,
    script: {
      text: '升级',
      code: 1
    },
    teacher: {
      name: 'qndroid',
      avatar: 'http://img3.sycdn.imooc.com/5333a0350001692e02200220-160-160.jpg',
      job: '移动开发工程师',
      introduction: '多年Android开发经验，曾任职于优酷等一线互联网企业，现就职于快手基础架构部，有丰富的Android应用架构和SDK开发经验，喜欢分享，授课风格循序渐进，擅长培养学生的编程思维，深受学员好评。'
    },
    labels: ['Android']
  },
  {
    category: {
      text: '移动端开发',
      code: 2,
    },
    title: 'Gradle3.0自动化项目构建技术精讲+实战',
    introduction: '全面覆盖Gradle核心知识和高级用法，高级工程师必备技能！',
    img: 'https://img.mukewang.com/szimg/5acf37460001aa3405400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b5085f900017de520000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 199,
    isDiscount: false,
    discountPrice: 0,
    script: {
      text: '升级',
      code: 1
    },
    teacher: {
      name: 'qndroid',
      avatar: 'http://img3.sycdn.imooc.com/5333a0350001692e02200220-160-160.jpg',
      job: '移动开发工程师',
      introduction: '多年Android开发经验，曾任职于优酷等一线互联网企业，现就职于快手基础架构部，有丰富的Android应用架构和SDK开发经验，喜欢分享，授课风格循序渐进，擅长培养学生的编程思维，深受学员好评。'
    },
    labels: ['Android']
  },
  {
    category: {
      text: '计算机基础',
      code: 3,
    },
    title: '玩转算法系列--图论精讲  面试升职必备（Java版）',
    introduction: '由于图论算法本身的复杂性和抽象性，让同学们头疼不已，这次bobo带你彻底玩转图论，克服对图论问题的恐惧心理',
    img: 'https://img1.sycdn.imooc.com/szimg/5d31765d08c90cba06000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5d3176630945ccf020000288.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 348,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'liuyubobobo',
      avatar: 'https://img1.sycdn.imooc.com/user/5347593e00010cfb01400140-100-100.jpg',
      job: '算法大牛 ACM亚洲区奖牌获得者',
      introduction: '创业者，全栈工程师，持续学习者。对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；拥有多款独立App作品；对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。'
    },
    labels: ['算法和数据结构']
  },
  {
    category: {
      text: '计算机基础',
      code: 3,
    },
    title: '玩转算法系列--数据结构精讲 更适合0算法基础入门到进阶（java版）',
    introduction: '体系完整，细致入微，0基础入门：动态数组/栈/队列/链表/BST/堆/线段树/Trie/并查集/AVL/红黑树…',
    img: 'https://img1.sycdn.imooc.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b5086220001ef9420000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 299,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'liuyubobobo',
      avatar: 'https://img1.sycdn.imooc.com/user/5347593e00010cfb01400140-100-100.jpg',
      job: '算法大牛 ACM亚洲区奖牌获得者',
      introduction: '创业者，全栈工程师，持续学习者。对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；拥有多款独立App作品；对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。'
    },
    labels: ['算法和数据结构']
  },
  {
    category: {
      text: '计算机基础',
      code: 3,
    },
    title: '结合编程学数学 专为程序员设计的线性代数',
    introduction: '创新设计，通俗易懂。用编程的方式学数学。这一次，bobo老师带你彻底征服线性代数',
    img: 'https://img1.sycdn.imooc.com/szimg/5b5835a60001907e05400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5b5835cb0001d0c120000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '初级',
      code: 1,
    },
    price: 348,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'liuyubobobo',
      avatar: 'https://img1.sycdn.imooc.com/user/5347593e00010cfb01400140-100-100.jpg',
      job: '算法大牛 ACM亚洲区奖牌获得者',
      introduction: '创业者，全栈工程师，持续学习者。对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；拥有多款独立App作品；对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。'
    },
    labels: ['数学']
  },
  {
    category: {
      text: '计算机基础',
      code: 3,
    },
    title: '看的见的算法 7个经典应用诠释算法精髓',
    introduction: '课程重应用、重实践、重思维，真正应用于实际工作开发中，也可作为毕设作品、面试项目。',
    img: 'https://img1.sycdn.imooc.com/szimg/59b2766f000190d505400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b4f355a0001852520000520.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '初级',
      code: 1,
    },
    price: 248,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'liuyubobobo',
      avatar: 'https://img1.sycdn.imooc.com/user/5347593e00010cfb01400140-100-100.jpg',
      job: '算法大牛 ACM亚洲区奖牌获得者',
      introduction: '创业者，全栈工程师，持续学习者。对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；拥有多款独立App作品；对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。'
    },
    labels: ['算法和数据结构']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '看的见的算法 Zookeeper源码分析',
    introduction: '“分而治之”逐一攻克Zookeeper框架各个组件的源码',
    img: 'https://img.mukewang.com/szimg/5d1ad17f08cd16e800000000-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b4f355a0001852520000520.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 388,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '城南大师兄',
      avatar: 'https://img1.sycdn.imooc.com/user/5cac7e810001fe7705270698-100-100.jpg',
      job: '国内知名公司架构师',
      introduction: '目前主要负责后端架构设计，具有十多年一线开发和架构经验，拥有丰富的高性能、高并发处理以及大型服务器软件设计架构经验。深谙各种源码。工作中常常和千万级高并发的问题“正面硬钢” ，因此在高并发调优等方面积累了丰富的实战经验。十几年的架构经验，让讲师早已将理论和实践锻造的炉火纯青。如果你想学习他密不外传的工作‘渡劫’经验，讲师等你打Call~'
    },
    labels: ['微服务']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '学习Hyperledger Fabric实战联盟链',
    introduction: '兼顾区块链应用层和底层  进击区块链工程师',
    img: 'https://img.mukewang.com/szimg/5b73d7f60001dc1e05400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5b73d7fc0001e07720000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '高级',
      code: 3,
    },
    price: 266,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '自游蜗牛',
      avatar: 'https://img.mukewang.com/user/5b6949e20001c6bf10801080-100-100.jpg',
      job: '区块链底层工程师',
      introduction: '现就职于某世界500强区块链团队，从事区块链底层研究以及BAAS平台搭建。精通区块链底层存储、共识等技术，职业方向偏重联盟链体系。'
    },
    labels: ['区块链']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '深度学习之目标检测常用算法原理+实践精讲',
    introduction: '从原理（YOLO / Faster RCNN / SSD / 文本检测 / 多任务网络）到场景实战，掌握目标检测核心技术',
    img: 'https://img1.sycdn.imooc.com/szimg/5bfb523c0001290905400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5bfb52480001858920000559.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '高级',
      code: 3,
    },
    price: 499,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '会写代码的好厨师',
      avatar: 'https://img1.sycdn.imooc.com/user/5b8618950001cd9101440146-100-100.jpg',
      job: '资深机器学习工程师',
      introduction: '现就职于某世界500强区块链团队，从事区块链底层研究以及BAAS平台搭建。精通区块链底层存储、共识等技术，职业方向偏重联盟链体系。'
    },
    labels: ['机器学习']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '看的见的算法 Zookeeper源码分析',
    introduction: '“分而治之”逐一攻克Zookeeper框架各个组件的源码',
    img: 'https://img.mukewang.com/szimg/5d1ad17f08cd16e800000000-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b4f355a0001852520000520.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 388,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '城南大师兄',
      avatar: 'https://img1.sycdn.imooc.com/user/5cac7e810001fe7705270698-100-100.jpg',
      job: '国内知名公司架构师',
      introduction: '目前主要负责后端架构设计，具有十多年一线开发和架构经验，拥有丰富的高性能、高并发处理以及大型服务器软件设计架构经验。深谙各种源码。工作中常常和千万级高并发的问题“正面硬钢” ，因此在高并发调优等方面积累了丰富的实战经验。十几年的架构经验，让讲师早已将理论和实践锻造的炉火纯青。如果你想学习他密不外传的工作‘渡劫’经验，讲师等你打Call~'
    },
    labels: ['微服务']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '学习Hyperledger Fabric实战联盟链',
    introduction: '兼顾区块链应用层和底层  进击区块链工程师',
    img: 'https://img.mukewang.com/szimg/5b73d7f60001dc1e05400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5b73d7fc0001e07720000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '高级',
      code: 3,
    },
    price: 266,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '自游蜗牛',
      avatar: 'https://img.mukewang.com/user/5b6949e20001c6bf10801080-100-100.jpg',
      job: '区块链底层工程师',
      introduction: '现就职于某世界500强区块链团队，从事区块链底层研究以及BAAS平台搭建。精通区块链底层存储、共识等技术，职业方向偏重联盟链体系。'
    },
    labels: ['区块链']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '深度学习之目标检测常用算法原理+实践精讲',
    introduction: '从原理（YOLO / Faster RCNN / SSD / 文本检测 / 多任务网络）到场景实战，掌握目标检测核心技术',
    img: 'https://img1.sycdn.imooc.com/szimg/5bfb523c0001290905400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5bfb52480001858920000559.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '高级',
      code: 3,
    },
    price: 499,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '会写代码的好厨师',
      avatar: 'https://img1.sycdn.imooc.com/user/5b8618950001cd9101440146-100-100.jpg',
      job: '资深机器学习工程师',
      introduction: '现就职于某世界500强区块链团队，从事区块链底层研究以及BAAS平台搭建。精通区块链底层存储、共识等技术，职业方向偏重联盟链体系。'
    },
    labels: ['机器学习']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '看的见的算法 Zookeeper源码分析',
    introduction: '“分而治之”逐一攻克Zookeeper框架各个组件的源码',
    img: 'https://img.mukewang.com/szimg/5d1ad17f08cd16e800000000-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b4f355a0001852520000520.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 388,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '城南大师兄',
      avatar: 'https://img1.sycdn.imooc.com/user/5cac7e810001fe7705270698-100-100.jpg',
      job: '国内知名公司架构师',
      introduction: '目前主要负责后端架构设计，具有十多年一线开发和架构经验，拥有丰富的高性能、高并发处理以及大型服务器软件设计架构经验。深谙各种源码。工作中常常和千万级高并发的问题“正面硬钢” ，因此在高并发调优等方面积累了丰富的实战经验。十几年的架构经验，让讲师早已将理论和实践锻造的炉火纯青。如果你想学习他密不外传的工作‘渡劫’经验，讲师等你打Call~'
    },
    labels: ['微服务']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '学习Hyperledger Fabric实战联盟链',
    introduction: '兼顾区块链应用层和底层  进击区块链工程师',
    img: 'https://img.mukewang.com/szimg/5b73d7f60001dc1e05400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5b73d7fc0001e07720000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '高级',
      code: 3,
    },
    price: 266,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '自游蜗牛',
      avatar: 'https://img.mukewang.com/user/5b6949e20001c6bf10801080-100-100.jpg',
      job: '区块链底层工程师',
      introduction: '现就职于某世界500强区块链团队，从事区块链底层研究以及BAAS平台搭建。精通区块链底层存储、共识等技术，职业方向偏重联盟链体系。'
    },
    labels: ['区块链']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '深度学习之目标检测常用算法原理+实践精讲',
    introduction: '从原理（YOLO / Faster RCNN / SSD / 文本检测 / 多任务网络）到场景实战，掌握目标检测核心技术',
    img: 'https://img1.sycdn.imooc.com/szimg/5bfb523c0001290905400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5bfb52480001858920000559.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '高级',
      code: 3,
    },
    price: 499,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '会写代码的好厨师',
      avatar: 'https://img1.sycdn.imooc.com/user/5b8618950001cd9101440146-100-100.jpg',
      job: '资深机器学习工程师',
      introduction: '现就职于某世界500强区块链团队，从事区块链底层研究以及BAAS平台搭建。精通区块链底层存储、共识等技术，职业方向偏重联盟链体系。'
    },
    labels: ['机器学习']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '看的见的算法 Zookeeper源码分析',
    introduction: '“分而治之”逐一攻克Zookeeper框架各个组件的源码',
    img: 'https://img.mukewang.com/szimg/5d1ad17f08cd16e800000000-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b4f355a0001852520000520.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 388,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '城南大师兄',
      avatar: 'https://img1.sycdn.imooc.com/user/5cac7e810001fe7705270698-100-100.jpg',
      job: '国内知名公司架构师',
      introduction: '目前主要负责后端架构设计，具有十多年一线开发和架构经验，拥有丰富的高性能、高并发处理以及大型服务器软件设计架构经验。深谙各种源码。工作中常常和千万级高并发的问题“正面硬钢” ，因此在高并发调优等方面积累了丰富的实战经验。十几年的架构经验，让讲师早已将理论和实践锻造的炉火纯青。如果你想学习他密不外传的工作‘渡劫’经验，讲师等你打Call~'
    },
    labels: ['微服务']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '学习Hyperledger Fabric实战联盟链',
    introduction: '兼顾区块链应用层和底层  进击区块链工程师',
    img: 'https://img.mukewang.com/szimg/5b73d7f60001dc1e05400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5b73d7fc0001e07720000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '高级',
      code: 3,
    },
    price: 266,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '自游蜗牛',
      avatar: 'https://img.mukewang.com/user/5b6949e20001c6bf10801080-100-100.jpg',
      job: '区块链底层工程师',
      introduction: '现就职于某世界500强区块链团队，从事区块链底层研究以及BAAS平台搭建。精通区块链底层存储、共识等技术，职业方向偏重联盟链体系。'
    },
    labels: ['区块链']
  },
  {
    category: {
      text: '前沿技术',
      code: 4,
    },
    title: '深度学习之目标检测常用算法原理+实践精讲',
    introduction: '从原理（YOLO / Faster RCNN / SSD / 文本检测 / 多任务网络）到场景实战，掌握目标检测核心技术',
    img: 'https://img1.sycdn.imooc.com/szimg/5bfb523c0001290905400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5bfb52480001858920000559.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '高级',
      code: 3,
    },
    price: 499,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '会写代码的好厨师',
      avatar: 'https://img1.sycdn.imooc.com/user/5b8618950001cd9101440146-100-100.jpg',
      job: '资深机器学习工程师',
      introduction: '现就职于某世界500强区块链团队，从事区块链底层研究以及BAAS平台搭建。精通区块链底层存储、共识等技术，职业方向偏重联盟链体系。'
    },
    labels: ['机器学习']
  },
  {
    category: {
      text: '云计算&大数据',
      code: 5,
    },
    title: 'SparkSQL极速入门  整合Kudu实现广告业务数据分析',
    introduction: '大数据工程师干货课程 带你从入门到实战掌握SparkSQL',
    img: 'https://img1.sycdn.imooc.com/szimg/5d844ae7089e674906000338-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5d844af609893ec140000800.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 388,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Michael_PK',
      avatar: 'https://img1.sycdn.imooc.com/user/533e4d510001c2ad02000200-100-100.jpg',
      job: '资深大数据架构师',
      introduction: '八年互联网公司一线研发经验，担任大数据架构师。主要从事基于Spark/Flink为核心打造的大数据公有云、私有云数据平台产品的研发。改造过Hadoop、Spark等框架的源码为云平台提供更高的执行性能。集群规模过万，有丰富的大数据项目实战经验以及授课经验(授课数千小时，深受学员好评)。'
    },
    labels: ['大数据']
  },
  {
    category: {
      text: '云计算&大数据',
      code: 5,
    },
    title: 'Spark进阶 大数据离线与实时项目实战',
    introduction: '大数据生态圈中多个框架(Spark/Hbase/Redis/Hadoop)的整合应用及调优',
    img: 'https://img1.sycdn.imooc.com/szimg/59f85ec90001103405400300-360-202.jpg',
    banner: 'https://img1.sycdn.imooc.com/szimg/5d844af609893ec140000800.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 399,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Michael_PK',
      avatar: 'https://img1.sycdn.imooc.com/user/533e4d510001c2ad02000200-100-100.jpg',
      job: '资深大数据架构师',
      introduction: '八年互联网公司一线研发经验，担任大数据架构师。主要从事基于Spark/Flink为核心打造的大数据公有云、私有云数据平台产品的研发。改造过Hadoop、Spark等框架的源码为云平台提供更高的执行性能。集群规模过万，有丰富的大数据项目实战经验以及授课经验(授课数千小时，深受学员好评)。'
    },
    labels: ['大数据']
  },
  {
    category: {
      text: '云计算&大数据',
      code: 5,
    },
    title: 'Spark Streaming实时流处理项目实战 ',
    introduction: 'Flume+Kafka+Spark Streaming 构建通用实时流处理平台',
    img: 'https://img1.sycdn.imooc.com/szimg/5c203a4b0001dcf306000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5c203a520001d14320000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 288,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Michael_PK',
      avatar: 'https://img1.sycdn.imooc.com/user/533e4d510001c2ad02000200-100-100.jpg',
      job: '资深大数据架构师',
      introduction: '八年互联网公司一线研发经验，担任大数据架构师。主要从事基于Spark/Flink为核心打造的大数据公有云、私有云数据平台产品的研发。改造过Hadoop、Spark等框架的源码为云平台提供更高的执行性能。集群规模过万，有丰富的大数据项目实战经验以及授课经验(授课数千小时，深受学员好评)。'
    },
    labels: ['大数据']
  },
  {
    category: {
      text: '运维&测试',
      code: 6,
    },
    title: '跟着360架构师 学习Shell脚本编程',
    introduction: '30%知识讲解+70%实例操作 掌握Shell脚本编程能力',
    img: 'https://img1.sycdn.imooc.com/szimg/5c46c4a308ad3b3406000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5c46c4ae099dc71320000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 366,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '酷田',
      avatar: 'http://img2.sycdn.imooc.com/5c297bb600013f6d11100834-160-160.jpg',
      job: '全栈工程师',
      introduction: '360企业安全集团资深工程师，曾就职于中国移动、亚信科技 ，等知名大型公司，多年工作经验积累，所传授的知识技能可以让你在实际工作中有的放矢，游刃有余。'
    },
    labels: ['运维']
  },
  {
    category: {
      text: '运维&测试',
      code: 6,
    },
    title: '企业级开源四层负载均衡解决方案-LVS',
    introduction: '轻松应对负载均衡，深刻理解网络系统架构，真正解决工作中的实际问题',
    img: 'https://img1.sycdn.imooc.com/szimg/5b99c15f0001ca0206000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b99d1e90001903240001120.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 199,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '酷田',
      avatar: 'http://img2.sycdn.imooc.com/5c297bb600013f6d11100834-160-160.jpg',
      job: '全栈工程师',
      introduction: '360企业安全集团资深工程师，曾就职于中国移动、亚信科技 ，等知名大型公司，多年工作经验积累，所传授的知识技能可以让你在实际工作中有的放矢，游刃有余。'
    },
    labels: ['运维']
  },
  {
    category: {
      text: '运维&测试',
      code: 6,
    },
    title: '跟着360架构师 学习Shell脚本编程',
    introduction: '30%知识讲解+70%实例操作 掌握Shell脚本编程能力',
    img: 'https://img1.sycdn.imooc.com/szimg/5c46c4a308ad3b3406000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5c46c4ae099dc71320000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 366,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '酷田',
      avatar: 'http://img2.sycdn.imooc.com/5c297bb600013f6d11100834-160-160.jpg',
      job: '全栈工程师',
      introduction: '360企业安全集团资深工程师，曾就职于中国移动、亚信科技 ，等知名大型公司，多年工作经验积累，所传授的知识技能可以让你在实际工作中有的放矢，游刃有余。'
    },
    labels: ['运维']
  },
  {
    category: {
      text: '运维&测试',
      code: 6,
    },
    title: '企业级开源四层负载均衡解决方案-LVS',
    introduction: '轻松应对负载均衡，深刻理解网络系统架构，真正解决工作中的实际问题',
    img: 'https://img1.sycdn.imooc.com/szimg/5b99c15f0001ca0206000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b99d1e90001903240001120.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 199,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '酷田',
      avatar: 'http://img2.sycdn.imooc.com/5c297bb600013f6d11100834-160-160.jpg',
      job: '全栈工程师',
      introduction: '360企业安全集团资深工程师，曾就职于中国移动、亚信科技 ，等知名大型公司，多年工作经验积累，所传授的知识技能可以让你在实际工作中有的放矢，游刃有余。'
    },
    labels: ['运维']
  },
  {
    category: {
      text: '数据库',
      code: 7,
    },
    title: '零基础入门 全角度解读企业主流数据库MySQL8.0',
    introduction: '掌握SQL优化与慢查询优化，具备独当一面的能力，彰显更多个人价值',
    img: 'https://img.mukewang.com/szimg/5ca5e266085019b306000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5ca5e26e09568dbc20000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '入门',
      code: 0,
    },
    price: 266,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'sqlercn',
      avatar: 'http://img3.sycdn.imooc.com/5ad7144100017a5e07410741-160-160.jpg',
      job: '数据库工程师',
      introduction: '高级数据库工程师（DBA），从事数据库管理工作多年，曾就职于聚美优品、猫扑、TOM等多家大型互联网公司，进行过千万级的数据处理，对大数据业务、高并发时数据优化积累了大量丰富的经验。'
    },
    labels: ['MySql']
  },
  {
    category: {
      text: '数据库',
      code: 7,
    },
    title: '零基础入门 全角度解读企业主流数据库MySQL8.0',
    introduction: '掌握SQL优化与慢查询优化，具备独当一面的能力，彰显更多个人价值',
    img: 'https://img.mukewang.com/szimg/5ca5e266085019b306000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5ca5e26e09568dbc20000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '入门',
      code: 0,
    },
    price: 266,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'sqlercn',
      avatar: 'http://img3.sycdn.imooc.com/5ad7144100017a5e07410741-160-160.jpg',
      job: '数据库工程师',
      introduction: '高级数据库工程师（DBA），从事数据库管理工作多年，曾就职于聚美优品、猫扑、TOM等多家大型互联网公司，进行过千万级的数据处理，对大数据业务、高并发时数据优化积累了大量丰富的经验。'
    },
    labels: ['MySql']
  },
  {
    category: {
      text: '数据库',
      code: 7,
    },
    title: '中高级开发晋升利器 MySQL面试指南',
    introduction: '9大类常见问题详解，切实提升数据库应用和管理能力，升职加薪必备佳品！',
    img: 'https://img.mukewang.com/szimg/5bdc3b81000178e812000676-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5bdc3b8a0001583240001120.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 288,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'sqlercn',
      avatar: 'http://img3.sycdn.imooc.com/5ad7144100017a5e07410741-160-160.jpg',
      job: '数据库工程师',
      introduction: '高级数据库工程师（DBA），从事数据库管理工作多年，曾就职于聚美优品、猫扑、TOM等多家大型互联网公司，进行过千万级的数据处理，对大数据业务、高并发时数据优化积累了大量丰富的经验。'
    },
    labels: ['MySql']
  },
  {
    category: {
      text: '数据库',
      code: 7,
    },
    title: '零基础入门 全角度解读企业主流数据库MySQL8.0',
    introduction: '掌握SQL优化与慢查询优化，具备独当一面的能力，彰显更多个人价值',
    img: 'https://img.mukewang.com/szimg/5ca5e266085019b306000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5ca5e26e09568dbc20000400.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '入门',
      code: 0,
    },
    price: 266,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'sqlercn',
      avatar: 'http://img3.sycdn.imooc.com/5ad7144100017a5e07410741-160-160.jpg',
      job: '数据库工程师',
      introduction: '高级数据库工程师（DBA），从事数据库管理工作多年，曾就职于聚美优品、猫扑、TOM等多家大型互联网公司，进行过千万级的数据处理，对大数据业务、高并发时数据优化积累了大量丰富的经验。'
    },
    labels: ['MySql']
  },
  {
    category: {
      text: '数据库',
      code: 7,
    },
    title: '中高级开发晋升利器 MySQL面试指南',
    introduction: '9大类常见问题详解，切实提升数据库应用和管理能力，升职加薪必备佳品！',
    img: 'https://img.mukewang.com/szimg/5bdc3b81000178e812000676-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5bdc3b8a0001583240001120.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 288,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'sqlercn',
      avatar: 'http://img3.sycdn.imooc.com/5ad7144100017a5e07410741-160-160.jpg',
      job: '数据库工程师',
      introduction: '高级数据库工程师（DBA），从事数据库管理工作多年，曾就职于聚美优品、猫扑、TOM等多家大型互联网公司，进行过千万级的数据处理，对大数据业务、高并发时数据优化积累了大量丰富的经验。'
    },
    labels: ['MySql']
  },
  {
    category: {
      text: '数据库',
      code: 7,
    },
    title: '玩转MongoDB4.0(最新版) 从入门到实践',
    introduction: '30%理论+70%实战，让你用实操去检验真理,一门让你事半功倍的入门进阶课',
    img: 'https://img.mukewang.com/szimg/5c90dc020849c59a06000338-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b4f355a0001852520000520.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '入门',
      code: 0,
    },
    price: 288,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Stannum',
      avatar: 'https://img1.sycdn.imooc.com/user/5b558fd00001ca6207410741-100-100.jpg',
      job: 'Java/C++敏捷开发专家',
      introduction: '目前在财经界俗称的“大摩”，一家成立于美国纽约的国际金融服务公司-摩根士丹利担任软件工程师和敏捷开发专家。 主攻Event Sourcing架构模式的应用。是一个“只有男同事,没有女同事”的程序媛一枚,先后就职于多家投资银行，负责开发“每一个bug都很贵”的内部交易系统,主导了股票交易执行系统和衍生品交易风险控制系统。'
    },
    labels: ['MongoDB']
  },
  {
    category: {
      text: 'UI设计&多媒体',
      code: 8,
    },
    title: '高薪设计师必修课 AE移动UI动效设计从入门到实战',
    introduction: '20多个商业实用案例，轻松Get√到AE动效核心技术，让你的作品脱颖而出！',
    img: 'https://img.mukewang.com/szimg/5aa9d2c1000104d510800600-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b51c7100001351220000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 199,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '墨染ART',
      avatar: 'http://img4.sycdn.imooc.com/5b1c1e530001c06c07410719-160-160.jpg',
      job: 'UI设计师',
      introduction: '站酷推荐设计师，UI中国推荐设计师。热门UI动效实战系列教程作者，对UI设计、动效设计、多终端响应式设计有深入的研究和经验。'
    },
    labels: ['设计基础']
  },
  {
    category: {
      text: 'UI设计&多媒体',
      code: 8,
    },
    title: '移动端App UI设计入门与实战',
    introduction: '涉及多项实用设计技能训练，成为一名具有“产品思维”的设计师！',
    img: 'https://img.mukewang.com/szimg/5a123d7e00011fa705400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b51c7100001351220000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 199,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '墨染ART',
      avatar: 'http://img4.sycdn.imooc.com/5b1c1e530001c06c07410719-160-160.jpg',
      job: 'UI设计师',
      introduction: '站酷推荐设计师，UI中国推荐设计师。热门UI动效实战系列教程作者，对UI设计、动效设计、多终端响应式设计有深入的研究和经验。'
    },
    labels: ['设计基础', 'APPUI设计']
  },
  {
    category: {
      text: 'UI设计&多媒体',
      code: 8,
    },
    title: '高薪设计师必修课 AE移动UI动效设计从入门到实战',
    introduction: '20多个商业实用案例，轻松Get√到AE动效核心技术，让你的作品脱颖而出！',
    img: 'https://img.mukewang.com/szimg/5aa9d2c1000104d510800600-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b51c7100001351220000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 199,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '墨染ART',
      avatar: 'http://img4.sycdn.imooc.com/5b1c1e530001c06c07410719-160-160.jpg',
      job: 'UI设计师',
      introduction: '站酷推荐设计师，UI中国推荐设计师。热门UI动效实战系列教程作者，对UI设计、动效设计、多终端响应式设计有深入的研究和经验。'
    },
    labels: ['设计基础']
  },
  {
    category: {
      text: 'UI设计&多媒体',
      code: 8,
    },
    title: '移动端App UI设计入门与实战',
    introduction: '涉及多项实用设计技能训练，成为一名具有“产品思维”的设计师！',
    img: 'https://img.mukewang.com/szimg/5a123d7e00011fa705400300-360-202.jpg',
    banner: 'https://img.mukewang.com/szimg/5b51c7100001351220000560.jpg',
    type: {
      text: '实战',
      code: 1
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 199,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '墨染ART',
      avatar: 'http://img4.sycdn.imooc.com/5b1c1e530001c06c07410719-160-160.jpg',
      job: 'UI设计师',
      introduction: '站酷推荐设计师，UI中国推荐设计师。热门UI动效实战系列教程作者，对UI设计、动效设计、多终端响应式设计有深入的研究和经验。'
    },
    labels: ['设计基础', 'APPUI设计']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: '初识HTML(5)+CSS(3)-2020升级版',
    introduction: 'HTML(5)+CSS(3)基础教程8小时带领大家步步深入学习标签用法和意义',
    img: 'https://img4.mukewang.com/529dc3380001379906000338-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '入门',
      code: 0,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '丶五月的夏天',
      avatar: 'https://img2.mukewang.com/54584f6d0001759002200220-80-80.jpg',
      job: 'Web前端工程师',
      introduction: ''
    },
    labels: ['HTML/CSS']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'JavaScript入门篇',
    introduction: 'JavaScript做为一名Web工程师的必备技术，本教程让您快速入门',
    img: 'https://img2.mukewang.com/53e1d0470001ad1e06000338-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '入门',
      code: 0,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '慕课官方号',
      avatar: 'https://img1.mukewang.com/5b88f1f50001688401500150-80-80.jpg',
      job: '页面重构设计',
      introduction: ''
    },
    labels: ['JavaScript']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'JavaScript进阶篇',
    introduction: '本课程从如何插入JS代码开始，带您进入网页动态交互世界',
    img: 'https://img2.mukewang.com/574678bd00010a7206000338-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '入门',
      code: 0,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '慕课官方号',
      avatar: 'https://img1.mukewang.com/5b88f1f50001688401500150-80-80.jpg',
      job: '页面重构设计',
      introduction: ''
    },
    labels: ['JavaScript']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'vue2.5入门',
    introduction: '快速理解Vue编程理念上手Vue2.0开发。',
    img: 'https://img2.mukewang.com/5ad5cc490001e53006000338-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Dell',
      avatar: 'https://img4.mukewang.com/5abe468b0001664107390741-80-80.jpg',
      job: 'Web前端工程师',
      introduction: ''
    },
    labels: ['Vue.js']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'Vue+Webpack打造todo应用',
    introduction: '用前端最热门框架Vue+最火打包工具Webpack打造todo应用',
    img: 'https://img1.mukewang.com/5a56fdb400017d0306000338-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '高级',
      code: 3,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'Jokcy',
      avatar: 'https://img1.sycdn.imooc.com/5a697c950001262b05790578-80-80.jpg',
      job: 'Web前端工程师',
      introduction: ''
    },
    labels: ['Vue.js']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'Vue+node.js调试入门',
    introduction: '理论实践相结合学习使用 Inspector 调试 Node.js。',
    img: 'https://img3.sycdn.imooc.com/5c3eaa0a08d7052706000338-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '入门',
      code: 0,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'lewis',
      avatar: 'https://img.mukewang.com/5c3ea1f10001b55908070807-80-80.jpg',
      job: 'Web前端工程师',
      introduction: ''
    },
    labels: ['Node.js']
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'Nodejs全栈入门',
    introduction: '基于node+mysql+react全栈实战',
    img: 'https://img3.sycdn.imooc.com/5dd7561309f8ae4806000338-240-135.png',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '一缕孤烟',
      avatar: 'https://img4.mukewang.com/54a2bf390001593c01000100-80-80.jpg',
      job: 'Web前端工程师',
      introduction: ''
    },
    labels: ['Node.js']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: '使用Prometheus实践基于Spring Boot监控告警体系',
    introduction: '基于Spring Boot2.X使用Prometheus实现监控大盘及微服务告警功能。',
    img: 'https://img2.mukewang.com/5e82b5b8099dc26405400300-240-135.png',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '龙猪GG',
      avatar: 'https://img1.mukewang.com/5b8cd6cb000114e702000112-80-80.jpg',
      job: '架构师',
      introduction: ''
    },
    labels: ['Java']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: '二进制与Java中的基本数据类型',
    introduction: '从认识二进制开始，逐步理解Java是如何存储和处理数据的。',
    img: 'https://img.mukewang.com/5e646d5708f882d512000676-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '入门',
      code: 0,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '舞马',
      avatar: 'https://img.mukewang.com/5e3c0b840001796401500124-80-80.jpg',
      job: '软件工程师',
      introduction: ''
    },
    labels: ['Java']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: '自己动手实现RPC框架',
    introduction: '自己动手实现一个完整的RPC框架，So Easy！',
    img: 'https://img.mukewang.com/5e37d120082e7c7c06000338-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '司马极客',
      avatar: 'https://img4.mukewang.com/5b8cdb710001d95c02000200-80-80.jpg',
      job: '软件工程师',
      introduction: ''
    },
    labels: ['Java']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: 'MUI+个推实现安卓与ios移动端推送',
    introduction: '结合慕信轻聊Netty实战，整合个推到前端与后端，实现安卓与ios移动端推送',
    img: 'https://img4.mukewang.com/5bebce6b0001bd6106000336-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '初级',
      code: 1,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '风间影月',
      avatar: 'https://img4.mukewang.com/5a0c5df20001a1cb05800580-80-80.jpg',
      job: '全栈工程师',
      introduction: ''
    },
    labels: ['Java', 'SpringBoot']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: 'Springboot 微信小程序 – 微信登录功能实战',
    introduction: '简单实现在小程序中对使用微信登录的方式来登录小程序应用',
    img: 'https://img2.mukewang.com/5bbf2def000118ab06000336-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '初级',
      code: 1,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '风间影月',
      avatar: 'https://img4.mukewang.com/5a0c5df20001a1cb05800580-80-80.jpg',
      job: '全栈工程师',
      introduction: ''
    },
    labels: ['Java', 'SpringBoot']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: 'Numpy基础入门',
    introduction: '从基本数组入手全面讲解Numpy中的核心知识',
    img: 'https://img.mukewang.com/5e9683f808f03af912000676-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '入门',
      code: 0,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '夏正东',
      avatar: 'https://img2.mukewang.com/5da6841d0001f79409600960-80-80.jpg',
      job: 'Python工程师',
      introduction: ''
    },
    labels: ['Python']
  },
  {
    category: {
      text: '后端开发',
      code: 1,
    },
    title: 'Python数据预处理（四）- 特征降维与可视化',
    introduction: '教会你使用Python数据预处理',
    img: 'https://img2.mukewang.com/5ce4b199083e469306000338-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '初级',
      code: 1,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '伏草惟存',
      avatar: 'https://img3.mukewang.com/545863cd0001b72a02200220-80-80.jpg',
      job: '算法工程师',
      introduction: ''
    },
    labels: ['Python', '自然语言处理']
  },
  {
    category: {
      text: '移动端开发',
      code: 2,
    },
    title: 'MultiDex从基础原理到实践优化',
    introduction: 'Android进阶学习必备，带你从基础用法到实践优化一站式掌握MultiDex。',
    img: 'https://img.mukewang.com/5e6098b409a0151406000338-240-135.png',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '凡諾',
      avatar: 'https://img.mukewang.com/5e57662a00012deb11111109-80-80.jpg',
      job: '移动开发工程师',
      introduction: ''
    },
    labels: ['Android']
  },
  {
    category: {
      text: '移动端开发',
      code: 2,
    },
    title: 'Android网络安全之加解密',
    introduction: '在不安全的网络环境中，如何安全的传输敏感数据',
    img: 'https://img4.mukewang.com/5dfc2e870902f80d06000338-240-135.png',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '凡諾',
      avatar: 'https://img.mukewang.com/5e57662a00012deb11111109-80-80.jpg',
      job: '移动开发工程师',
      introduction: ''
    },
    labels: ['Android']
  },
  {
    category: {
      text: '移动端开发',
      code: 2,
    },
    title: 'Android CMake以及NDK实践基础',
    introduction: 'Android底层开发入门必备，CMake动态库编译和使用，NDK的各种开发技巧。 ',
    img: 'https://img1.mukewang.com/5de8a5740989152106000338-240-135.png',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'glumes',
      avatar: 'https://img3.mukewang.com/5462e44b0001421501800180-80-80.jpg',
      job: '移动开发工程师',
      introduction: ''
    },
    labels: ['Android']
  },
  {
    category: {
      text: '计算机基础',
      code: 3,
    },
    title: 'Android 机器学习中的统计学基础',
    introduction: '机器学习中的常用统计学知识点 ',
    img: 'https://img4.mukewang.com/5b470bfe0001cdbf06000338-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '初级',
      code: 1,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: '北极小琪',
      avatar: 'https://img4.mukewang.com/5bcd983c0001264203500350-80-80.jpg',
      job: '算法工程师',
      introduction: ''
    },
    labels: ['计算机网络', '算法与数据结构']
  },
  {
    category: {
      text: '计算机基础',
      code: 3,
    },
    title: 'Javascript实现二叉树算法',
    introduction: '感受JS与数据结构的魅力。 ',
    img: 'https://img3.mukewang.com/59ae0e2a0001307706000338-240-135.jpg',
    banner: '',
    type: {
      text: '免费',
      code: 0
    },
    hard: {
      text: '中级',
      code: 2,
    },
    price: 0,
    isDiscount: false,
    discountPrice: 0,
    teacher: {
      name: 'coding迪斯尼',
      avatar: 'https://img.mukewang.com/57a333b400010f6006400478-80-80.jpg',
      job: '全栈工程师',
      introduction: ''
    },
    labels: ['JavaScript', '算法与数据结构']
  }
]
export default lessonData
