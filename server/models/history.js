import moogose from 'mongoose'
import historyData from '../initData/history.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema  = moogose.Schema
const HistorySchema = new Schema({
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
  time: {
    type: String
  }
})

const historyModel = moogose.model('history', HistorySchema)

// 当没有数据时，初始化数据
historyModel.find((err, data) => {
  if (!data || data.length === 0) {
    historyData.forEach(item => {
      item.id = getGuid()
      item.time = new Date().toISOString()
      historyModel.create(item)
    })
  }
})

export default historyModel
