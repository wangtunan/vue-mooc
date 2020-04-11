import mongoose from 'mongoose'
import RechargeData from '../initData/recharge.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const RechargeSchema = new Schema({
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
  time: {
    type: String,
    default: ''
  },
  money: {
    type: Number,
    default: 0
  },
  action: {
    text: String,
    code: Number
  },
  way: {
    text: String,
    code: Number
  },
  remark: {
    type: String,
    default: ''
  }
})

const rechargeModel = mongoose.model('recharge', RechargeSchema)
// 判断有无数据，没有则初始化
export function initUserRecharges (userid) {
  rechargeModel.find((error, data) => {
    if (!data || data.length === 0) {
      RechargeData.forEach(item => {
        item.id = getGuid()
        item.userid = userid
        rechargeModel.create(item)
      })
    }
  })
}

export default rechargeModel
