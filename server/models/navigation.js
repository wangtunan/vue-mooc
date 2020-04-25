import mongoose from 'mongoose'
import navData from '../initData/navigation.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const NavigationSchema = new Schema({
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
    type: String,
    required: true
  },
  sort: Number
})

const navigationModel = mongoose.model('navigation', NavigationSchema)
// 判断是否有数据，无数据则初始化
navigationModel.find((err, data) => {
  if (!data || data.length === 0) {
    navData.forEach((item, index) => {
      item.id = getGuid()
      item.sort = index
      navigationModel.create(item)
    })
  }
})
export default navigationModel
