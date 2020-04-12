import mongoose from 'mongoose'
import labelTypeData from '../initData/labelType.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const LabelTypeSchema = new Schema({
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
  code: {
    type: Number,
    default: 0,
  },
  sort: {
    type: Number,
    default: 0
  }
})

const labelTypeModel = mongoose.model('labeltype', LabelTypeSchema)
// 判断有无数据，没有则初始化
labelTypeModel.find((error, data) => {
  if (!data || data.length === 0) {
    labelTypeData.forEach(item => {
      item.id = getGuid()
      labelTypeModel.create(item)
    })
  }
})

export default labelTypeModel
