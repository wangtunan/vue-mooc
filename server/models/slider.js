// 首页-滚动轮播
import mongoose from 'mongoose'
import sliderData from '../initData/slider.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const SliderSchema = new Schema({
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
  sort: {
    type: Number,
    required: true
  }
})
const sliderModel = mongoose.model('slider', SliderSchema)

// 如果没有数据，则初始化
sliderModel.find((err, data) => {
  if (!data || data.length === 0) {
    sliderData.forEach(item => {
      item.id = getGuid()
      sliderModel.create(item)
    })
  }
})

export default sliderModel