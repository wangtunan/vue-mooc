import mongoose from 'mongoose'
import articleTypesData from '../initData/articleType.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const ArticleTypeSchema = new Schema({
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
    default: 0
  }
})

const articleTypeModel = mongoose.model('articleType', ArticleTypeSchema)
// 判断有无数据，没有则初始化
articleTypeModel.find((err, data) => {
  if (!data || data.length === 0) {
    articleTypesData.forEach((item, index) => {
      const type = {
        id: getGuid(),
        code: index,
        title: item
      }
      articleTypeModel.create(type)
    })
  }
})

export default articleTypeModel
