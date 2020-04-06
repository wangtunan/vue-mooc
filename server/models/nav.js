import mongoose from 'mongoose'
import navData from '../initData/header.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const NavSchema = new Schema({
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
  path: {
    type: String,
    required: true,
    default: '/'
  },
  icon: {
    type: String
  }
})

const navModel = mongoose.model('nav', NavSchema)

// 如果没有数据，则初始化
navModel.find((err, data) => {
  if (!data || data.length === 0) {
    navData.forEach(item => {
      item.id = getGuid()
      navModel.create(item)
    })
  }
})

export default navModel
