import mongoose from 'mongoose'
import integralTypesData from '../initData/integralType.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const IntegralTypesSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  code: {
    type: String,
    enum: [0, 1],
    default: 0
  },
  text: {
    type: String,
    required: true
  }
})

const integralTypesModel = mongoose.model('integraltype', IntegralTypesSchema)
// 判断有无数据，没有则初始化
integralTypesModel.find((err, data) => {
  if (!data || data.length === 0) {
    integralTypesData.forEach(item => {
      item.id = getGuid()
      integralTypesModel.create(item)
    })
  }
})

export default integralTypesModel
