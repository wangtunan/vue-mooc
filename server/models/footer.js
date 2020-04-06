import mongoose from 'mongoose'
import footerData from '../initData/footer.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const FooterSchema = new Schema({
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
  url: {
    type: String
  },
  sort: {
    type: Number,
    required: true
  }
})

const footerModel = mongoose.model('footer', FooterSchema)
// 当没有数据时，初始化数据
footerModel.find((err, data) => {
  if (!data || data.length === 0) {
    footerData.forEach((item, index) => {
      item.id = getGuid()
      item.sort = index + 1
      footerModel.create(item)
    })
  }
})

export default footerModel
