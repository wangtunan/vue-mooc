import mongoose from 'mongoose'
import readData  from '../initData/read.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const ReadSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  type: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  detailImg: String,
  desc: String,
  price: {
    type: Number,
    default: 0
  },
  persons: {
    type: Number,
    default: 0
  },
  term: {
    type: Number,
    default: 0
  },
  isRecommend: {
    type: Boolean,
    default: false
  },
  author: {
    avatar: String,
    name: String,
    job: String
  },
  chapter: [
    {
      title: String,
      data: [
        {
          title: String,
          isTry: Boolean,
          time: String
        }
      ]
    }
  ]
})

const readModel = mongoose.model('read', ReadSchema)
// 判断有无数据，没有则初始化
readModel.find((err, data) => {
  if (!data || data.length === 0) {
    readData.forEach(item => {
      item.id = getGuid()
      item.price = Number(item.price)
      item.persons = Number(item.persons)
      item.term = Number(item.term)
      readModel.create(item)
    })
  }
})

export default readModel
