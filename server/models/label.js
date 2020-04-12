import mongoose from 'mongoose'
import labelData from '../initData/label.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const LabelSchema = new Schema({
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
  sort: {
    type: Number,
    default: 0
  },
  type: {
    text: String,
    code: Number
  }
})

const labelModel = mongoose.model('label', LabelSchema)
// 判断有无数据，没有则初始化
labelModel.find((error, data) => {
  if (!data || data.length === 0) {
    labelData.forEach(item => {
      item.id = getGuid()
      labelModel.create(item)
    })
  }
})

export default labelModel
