import mongoose from 'mongoose'
import hotData  from '../initData/hot.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const HotSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  value: {
    type: String,
    required: true
  },
  time: {
    type: String
  }
})

const hotModel = mongoose.model('hot', HotSchema)

// 如果没有数据，则初始化
hotModel.find((err, data) => {
  if (!data || data.length === 0) {
    hotData.forEach(item => {
      item.id = getGuid()
      item.time = new Date().toISOString()
      hotModel.create(item)
    })
  }
})

export default hotModel
