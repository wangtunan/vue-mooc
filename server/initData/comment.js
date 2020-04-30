const commentData = [
  {
    name: "网络侦探",
    avatar: "https://img.mukewang.com/5599e8e100010c2110800960-40-40.jpg",
    content_score: 9.6,
    easy_score: 9.5,
    logic_score: 9.7,
    time: "2019-08-01",
    comment: "就弱基础Vue入门来说真的是很不错的入门课程，html引入Vue的写法和Vue的工程化开发方式也有介绍，认真学完再去学官方文档会轻松不少。"
  },
  {
    name: "Cassie_MC",
    avatar: "https://img3.mukewang.com/58f85af900019f2102240224-40-40.jpg",
    content_score: 9.6,
    easy_score: 9.2,
    logic_score: 9.8,
    time: "2019-08-01",
    comment: "非常适合入门了，没有上来就搭环境，而是深入浅出的结合小demo，把Vue的基础知识结构快速搭建起来，让入学者没有负担，还能有所收获。"
  },
  {
    name: "凌晨晚餐",
    avatar: "https://img.mukewang.com/5a3f4e1c0001b4bf02500250-40-40.jpg",
    content_score: 9.9,
    easy_score: 9.3,
    logic_score: 9.4,
    time: "2019-08-01",
    comment: "之前只用过react，看这个课程，对vue有了初步的了解，挺好的"
  },
  {
    name: "慕丝3222080",
    avatar: "https://img1.mukewang.com/5458655200013d9802200220-40-40.jpg",
    content_score: 8,
    easy_score: 9.3,
    logic_score: 9.4,
    time: "2019-08-01",
    comment: "感谢老师，入门很有帮助！"
  },
  {
    name: "熬夜会牙痛_代码打多会掉头发",
    avatar: "https://img2.mukewang.com/545862fe00017c2602200220-40-40.jpg",
    content_score: 7,
    easy_score: 8.3,
    logic_score: 8.4,
    time: "2019-08-01",
    comment: "老师讲的很细，思路清晰，视频时长也不算长，学起来很轻松"
  },
  {
    name: "网络侦探",
    avatar: "https://img.mukewang.com/5599e8e100010c2110800960-40-40.jpg",
    content_score: 9,
    easy_score: 8.3,
    logic_score: 8.4,
    time: "2019-08-01",
    comment: "就弱基础Vue入门来说真的是很不错的入门课程，html引入Vue的写法和Vue的工程化开发方式也有介绍，认真学完再去学官方文档会轻松不少。"
  },
  {
    name: "Cassie_MC",
    avatar: "https://img3.mukewang.com/58f85af900019f2102240224-40-40.jpg",
    content_score: 9,
    easy_score: 9.3,
    logic_score: 9.4,
    time: "2019-08-01",
    comment: "非常适合入门了，没有上来就搭环境，而是深入浅出的结合小demo，把Vue的基础知识结构快速搭建起来，让入学者没有负担，还能有所收获。"
  },
  {
    name: "凌晨晚餐",
    avatar: "https://img.mukewang.com/5a3f4e1c0001b4bf02500250-40-40.jpg",
    content_score: 8.5,
    easy_score: 9,
    logic_score: 9,
    time: "2019-08-01",
    comment: "之前只用过react，看这个课程，对vue有了初步的了解，挺好的"
  },
  {
    name: "慕丝3222080",
    avatar: "https://img1.mukewang.com/5458655200013d9802200220-40-40.jpg",
    content_score: 9.9,
    easy_score: 9,
    logic_score: 9,
    time: "2019-08-01",
    comment: "感谢老师，入门很有帮助！"
  },
  {
    name: "熬夜会牙痛_代码打多会掉头发",
    avatar: "https://img2.mukewang.com/545862fe00017c2602200220-40-40.jpg",
    content_score: 6.6,
    easy_score: 8,
    logic_score: 8,
    time: "2019-08-01",
    comment: "老师讲的很细，思路清晰，视频时长也不算长，学起来很轻松"
  },
  {
    name: "网络侦探",
    avatar: "https://img.mukewang.com/5599e8e100010c2110800960-40-40.jpg",
    content_score: 9.6,
    easy_score: 9.5,
    logic_score: 9.7,
    time: "2019-08-01",
    comment: "就弱基础Vue入门来说真的是很不错的入门课程，html引入Vue的写法和Vue的工程化开发方式也有介绍，认真学完再去学官方文档会轻松不少。"
  },
  {
    name: "Cassie_MC",
    avatar: "https://img3.mukewang.com/58f85af900019f2102240224-40-40.jpg",
    content_score: 9.6,
    easy_score: 9.2,
    logic_score: 9.8,
    time: "2019-08-01",
    comment: "非常适合入门了，没有上来就搭环境，而是深入浅出的结合小demo，把Vue的基础知识结构快速搭建起来，让入学者没有负担，还能有所收获。"
  },
  {
    name: "凌晨晚餐",
    avatar: "https://img.mukewang.com/5a3f4e1c0001b4bf02500250-40-40.jpg",
    content_score: 9.9,
    easy_score: 9.3,
    logic_score: 9.4,
    time: "2019-08-01",
    comment: "之前只用过react，看这个课程，对vue有了初步的了解，挺好的"
  },
  {
    name: "慕丝3222080",
    avatar: "https://img1.mukewang.com/5458655200013d9802200220-40-40.jpg",
    content_score: 8,
    easy_score: 9.3,
    logic_score: 9.4,
    time: "2019-08-01",
    comment: "感谢老师，入门很有帮助！"
  },
  {
    name: "熬夜会牙痛_代码打多会掉头发",
    avatar: "https://img2.mukewang.com/545862fe00017c2602200220-40-40.jpg",
    content_score: 7,
    easy_score: 8.3,
    logic_score: 8.4,
    time: "2019-08-01",
    comment: "老师讲的很细，思路清晰，视频时长也不算长，学起来很轻松"
  },
  {
    name: "网络侦探",
    avatar: "https://img.mukewang.com/5599e8e100010c2110800960-40-40.jpg",
    content_score: 9,
    easy_score: 8.3,
    logic_score: 8.4,
    time: "2019-08-01",
    comment: "就弱基础Vue入门来说真的是很不错的入门课程，html引入Vue的写法和Vue的工程化开发方式也有介绍，认真学完再去学官方文档会轻松不少。"
  },
  {
    name: "Cassie_MC",
    avatar: "https://img3.mukewang.com/58f85af900019f2102240224-40-40.jpg",
    content_score: 9,
    easy_score: 9.3,
    logic_score: 9.4,
    time: "2019-08-01",
    comment: "非常适合入门了，没有上来就搭环境，而是深入浅出的结合小demo，把Vue的基础知识结构快速搭建起来，让入学者没有负担，还能有所收获。"
  },
  {
    name: "凌晨晚餐",
    avatar: "https://img.mukewang.com/5a3f4e1c0001b4bf02500250-40-40.jpg",
    content_score: 8.5,
    easy_score: 9,
    logic_score: 9,
    time: "2019-08-01",
    comment: "之前只用过react，看这个课程，对vue有了初步的了解，挺好的"
  },
  {
    name: "慕丝3222080",
    avatar: "https://img1.mukewang.com/5458655200013d9802200220-40-40.jpg",
    content_score: 9.9,
    easy_score: 9,
    logic_score: 9,
    time: "2019-08-01",
    comment: "感谢老师，入门很有帮助！"
  },
  {
    name: "熬夜会牙痛_代码打多会掉头发",
    avatar: "https://img2.mukewang.com/545862fe00017c2602200220-40-40.jpg",
    content_score: 6.6,
    easy_score: 8,
    logic_score: 8,
    time: "2019-08-01",
    comment: "老师讲的很细，思路清晰，视频时长也不算长，学起来很轻松"
  }
]

export default commentData
