import mongoose from 'mongoose'
import readTypesData from '../initData/readType.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const ReadTypesSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  value: {
    type: String,
    required: true
  },
  sort: {
    type: Number,
    default: 0
  }
})

const readTypesModel = mongoose.model('readTypes', ReadTypesSchema)
// 判断有没有数据，没有则初始化数据
readTypesModel.find((err, data) => {
  if (!data || data.length === 0) {
    readTypesData.forEach((item, index) => {
      const type = {
        id: getGuid(),
        sort: index + 1,
        value: item
      }
      readTypesModel.create(type)
    })
  }
})

export default readTypesModel