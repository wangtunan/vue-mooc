import mongoose from 'mongoose'
import integralData from '../initData/integral.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const IntegralSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  integral: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    required: true
  }
})

const integralModel = mongoose.model('integral', IntegralSchema)
// 判断有无数据，没有则初始化
integralModel.find((err, data) => {
  if(!data || data.length === 0) {
    integralData.forEach(item => {
      item.id = getGuid()
      integralModel.create(item)
    })
  }
})

export default integralModel
