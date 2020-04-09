import mongoose from 'mongoose'
import logsData from '../initData/log.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const LogSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  userid: {
    type: String,
    required: true
  },
  type: {
    text: String,
    code: Number
  },
  time: {
    type: String,
    required: true
  },
  ip: String,
  device: String,
  city: String
})

const logModel = mongoose.model('log', LogSchema)
// 判断有无数据，没有则初始化
export function initUserLogs (userid) {
  logModel.find((err, data) => {
    if (!data || data.length === 0) {
      logsData.forEach(item => {
        item.id = getGuid()
        item.userid = userid
        logModel.create(item)
      })
    }
  })
}
export default logModel
