import crypto from 'crypto-js'
const userData = [
  {
    username: 'why',
    password: crypto.MD5('123456').toString(),
    nickname: 'BlueMan_汪汪汪',
    avatar: 'https://img.mukewang.com/5882f5f70001525e01000100-100-100.jpg',
    sex: 'male',
    job: 'Web前端工程师',
    city: '广东省广州市',
    signature: '故九万里，则风斯在下矣，而后乃今培风；背负青天，而莫之夭阏者，而后乃今将图南',
    hour: 1255,
    exp: 20884,
    integral: 160,
    follow: 5,
    fans: 1,
    email: 'why583440138@gmail.com',
    qq: '583xxxxx38',
    phone: '182xxxxxx66',
    wechat: 'wechat',
    weibo: 'weibo'
  }
]

export default userData
