import mongoose from 'mongoose'
import questionData from '../initData/question.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const QuestionSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  title: {
    type: String,
    required: true
  },
  answers: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: ''
  },
  tags: {
    type: Array
  },
  isResolve: {
    type: Boolean,
    default: false
  }
})

const questionModel = mongoose.model('question', QuestionSchema)
// 判断有无数据，没有则初始化
questionModel.find((err, data) => {
  if (!data || data.length === 0) {
    questionData.forEach(item => {
      item.id = getGuid()
      questionModel.create(item)
    })
  }
})

export default questionModel
