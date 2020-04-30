import mongoose from 'mongoose'
import lessonData from '../initData/lesson.js'
import CommentData from '../initData/comment.js'
import QaData from '../initData/qa.js'
import Catalog from '../models/catalog.js'
import Comment from '../models/comment.js'
import Qa from '../models/qa.js'
import { freeCatalogData, lessonCatalogData } from '../initData/catalog.js'
import { getGuid, getRandomNum } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const LessonSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  category: {
    text: String,
    code: Number,
  },
  title: {
    type: String,
    required: true
  },
  introduction: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    required: true
  },
  banner: {
    type: String
  },
  type: {
    text: String,
    code: {
      type: Number,
      enum: [0, 1, 2],
      default: 0
    }
  },
  hard: {
    text: String,
    code: Number
  },
  price: {
    type: Number,
    default: 0
  },
  isDiscount: {
    type: Boolean,
    default: false
  },
  discountPrice: {
    type: Number,
    default: 0
  },
  teacher: {
    name: String,
    avatar: String,
    job: String,
    introduction: String
  },
  time: String,
  persons: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  },
  labels: {
    type: Array
  }
})

const lessonModel = mongoose.model('lesson', LessonSchema)
// 判断有无数据，没有则初始化
lessonModel.find((err, data) => {
  if (!data || data.length === 0) {
    Catalog.deleteMany()
    Comment.deleteMany()
    Qa.deleteMany()
    lessonData.forEach((item, index) => {
      item.id = getGuid()
      item.time = new Date(new Date().getTime() + index * 1000).toISOString().replace('T', ' ').substring(0, 19)
      item.persons = getRandomNum(1, 10000)
      item.comments = getRandomNum(1, 10000)
      lessonModel.create(item)
      
      // 添加课程目录
      if (item.type.code === 1) {
        Catalog.create(Object.assign({
          id: getGuid(),
          lessonid: item.id
        }, lessonCatalogData))
      } else {
        Catalog.create(Object.assign({
          id: getGuid(),
          lessonid: item.id
        }, freeCatalogData))
      }

      // 添加课程评论
      Comment.create({
        id: getGuid(),
        lessonid: item.id,
        list: CommentData
      })

      // 添加课程问答
      Qa.create({
        id: getGuid(),
        lessonid: item.id,
        list: QaData
      })
    })
  }
})

export default lessonModel
