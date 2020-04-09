import mongoose from 'mongoose'
import userData from '../initData/user.js';
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nickname: String,
  avatar: {
    type: String,
    default: 'https://static.mukewang.com/static/img/avatar_default.png'
  },
  sex: {
    type: String,
    enum: ['male', 'female'],
    default: 'male'
  },
  job: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  signature: {
    type: String,
    default: ''
  },
  hour: {
    type: Number,
    default: 0
  },
  exp: {
    type: Number,
    default: 0
  },
  integral: {
    type: Number,
    default: 0
  },
  follow: {
    type: Number,
    default: 0
  },
  fans: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    default: ''
  },
  qq: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  wechat: {
    type: String,
    default: ''
  },
  weibo: {
    type: String,
    default: ''
  }
})

const userModel = mongoose.model('user', UserSchema)
// 判断有没有数据，没有则初始化
userModel.find((err, data) => {
  if (!data || data.length === 0) {
    userData.forEach(item => {
      item.id = getGuid()
      userModel.create(item)
    })
  }
})

export default userModel
