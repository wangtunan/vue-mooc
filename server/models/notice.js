import mongoose from 'mongoose'
import noticeData from '../initData/notice.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const NoticeSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  code: {
    type: Number,
    enum: [1, 2],
    required: true
  },
  time: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const noticeModel = mongoose.model('notice', NoticeSchema)
// 判断有无数据，没有则初始化
noticeModel.find((err, data) => {
  if (!data || data.length === 0) {
    noticeData.forEach((item, index) => {
      item.id = getGuid() + index
      noticeModel.create(item)
    })
  }
})

export default noticeModel
