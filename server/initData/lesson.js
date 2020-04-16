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
    isDiscount: false,
    discountPrice: 0,
    labels: [],
    scripts: {},
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    }
  },
  {
    category: {
      text: '前端开发',
      code: 0,
    },
    title: 'React服务器渲染原理解析与实践',
    introduction: '从零开始，带你搭建属于自己的React SSR框架，从根本上解决客户端渲染问题 。',
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'Dell',
      avatar: 'https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg',
      job: 'Web前端工程师',
      introduction: 'BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！'
    }
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
    isDiscount: false,
    discountPrice: 0,
    labels: [],
    scripts: {},
    teacher: {
      name: 'ustbhuangyi',
      avatar: 'https://img.mukewang.com/user/577baef700019c4501400140-100-100.jpg',
      job: 'Web前端工程师',
      introduction: '曾任职百度、滴滴，现担任Zoom前端架构师，推进前后端分离架构方案，同时负责 Zoom 自研组件库。公众号《老黄的前端私房菜》，《Vue.js 技术揭秘》独立作者，《Vue.js 权威指南》主要作者，开源项目 better-scroll 作者。曾主导滴滴开源项目 cube-ui，建立团队技术博客。'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'ustbhuangyi',
      avatar: 'https://img.mukewang.com/user/577baef700019c4501400140-100-100.jpg',
      job: 'Web前端工程师',
      introduction: '曾任职百度、滴滴，现担任Zoom前端架构师，推进前后端分离架构方案，同时负责 Zoom 自研组件库。公众号《老黄的前端私房菜》，《Vue.js 技术揭秘》独立作者，《Vue.js 权威指南》主要作者，开源项目 better-scroll 作者。曾主导滴滴开源项目 cube-ui，建立团队技术博客。'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'ustbhuangyi',
      avatar: 'https://img.mukewang.com/user/577baef700019c4501400140-100-100.jpg',
      job: 'Web前端工程师',
      introduction: '曾任职百度、滴滴，现担任Zoom前端架构师，推进前后端分离架构方案，同时负责 Zoom 自研组件库。公众号《老黄的前端私房菜》，《Vue.js 技术揭秘》独立作者，《Vue.js 权威指南》主要作者，开源项目 better-scroll 作者。曾主导滴滴开源项目 cube-ui，建立团队技术博客。'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: '7七月',
      avatar: 'https://img.mukewang.com/user/54584e2c00010a2c02200220-100-100.jpg',
      job: '全栈工程师',
      introduction: '十年研发及团队管理经验，对程序员面临的各种问题深有体会；精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。课程讲解深入浅出，极为擅长培养学生的编程思维。'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: '7七月',
      avatar: 'https://img.mukewang.com/user/54584e2c00010a2c02200220-100-100.jpg',
      job: '全栈工程师',
      introduction: '十年研发及团队管理经验，对程序员面临的各种问题深有体会；精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。课程讲解深入浅出，极为擅长培养学生的编程思维。'
    }
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
    labels: [],
    scripts: {
      text: '升级',
      code: 1
    },
    teacher: {
      name: '7七月',
      avatar: 'https://img.mukewang.com/user/54584e2c00010a2c02200220-100-100.jpg',
      job: '全栈工程师',
      introduction: '十年研发及团队管理经验，对程序员面临的各种问题深有体会；精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。课程讲解深入浅出，极为擅长培养学生的编程思维。'
    }
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
    labels: [],
    scripts: {
      text: '升级',
      code: 1
    },
    teacher: {
      name: 'CrazyCodeBoy',
      avatar: 'https://img.mukewang.com/user/545847e20001163c02200220-100-100.jpg',
      job: '移动端开发工程师',
      introduction: '深耕移动端领域8年有余，全栈技术专家，CSDN 博客专家，擅长Android、iOS、Flutter、React Native以及小程序项目开发，负责过前端、Java、Android、iOS等多平台项目的研发，有多款React Native App上线及管理经验。他享受编程、热爱开源、酷爱分享，平时除了写写博客外，也分享一些开源技术干货 · Github'
    }
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
    labels: [],
    scripts: {
      text: '升级',
      code: 1
    },
    teacher: {
      name: 'CrazyCodeBoy',
      avatar: 'https://img.mukewang.com/user/545847e20001163c02200220-100-100.jpg',
      job: '移动端开发工程师',
      introduction: '深耕移动端领域8年有余，全栈技术专家，CSDN 博客专家，擅长Android、iOS、Flutter、React Native以及小程序项目开发，负责过前端、Java、Android、iOS等多平台项目的研发，有多款React Native App上线及管理经验。他享受编程、热爱开源、酷爱分享，平时除了写写博客外，也分享一些开源技术干货 · Github'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'liuyubobobo',
      avatar: 'https://img1.sycdn.imooc.com/user/5347593e00010cfb01400140-100-100.jpg',
      job: '算法大牛 ACM亚洲区奖牌获得者',
      introduction: '创业者，全栈工程师，持续学习者。对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；拥有多款独立App作品；对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'liuyubobobo',
      avatar: 'https://img1.sycdn.imooc.com/user/5347593e00010cfb01400140-100-100.jpg',
      job: '算法大牛 ACM亚洲区奖牌获得者',
      introduction: '创业者，全栈工程师，持续学习者。对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；拥有多款独立App作品；对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'liuyubobobo',
      avatar: 'https://img1.sycdn.imooc.com/user/5347593e00010cfb01400140-100-100.jpg',
      job: '算法大牛 ACM亚洲区奖牌获得者',
      introduction: '创业者，全栈工程师，持续学习者。对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；拥有多款独立App作品；对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'liuyubobobo',
      avatar: 'https://img1.sycdn.imooc.com/user/5347593e00010cfb01400140-100-100.jpg',
      job: '算法大牛 ACM亚洲区奖牌获得者',
      introduction: '创业者，全栈工程师，持续学习者。对技术开发，产品设计、前后端，ios，html5，智能算法等领域均有接触；拥有多款独立App作品；对一切可编程的东西有浓厚兴趣，对游戏编程格外感兴趣。相信编程改变一切。'
    }
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
    labels: [],
    scripts: {},
    teacher: {
      name: 'Stannum',
      avatar: 'https://img1.sycdn.imooc.com/user/5b558fd00001ca6207410741-100-100.jpg',
      job: 'Java/C++敏捷开发专家',
      introduction: '目前在财经界俗称的“大摩”，一家成立于美国纽约的国际金融服务公司-摩根士丹利担任软件工程师和敏捷开发专家。 主攻Event Sourcing架构模式的应用。是一个“只有男同事,没有女同事”的程序媛一枚,先后就职于多家投资银行，负责开发“每一个bug都很贵”的内部交易系统,主导了股票交易执行系统和衍生品交易风险控制系统。'
    }
  }
]
export default lessonData
