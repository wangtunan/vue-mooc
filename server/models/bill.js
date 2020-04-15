import mongoose from 'mongoose'
import billData from '../initData/bill.js'
import { getGuid, getOrderId } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const BillSchema = new Schema({
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
  orderno: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  way: {
    text: String,
    code: Number
  }
})

const billModel = mongoose.model('bill', BillSchema)
// 判断有无数据，没有则初始化数据
export function initUserBills (userid) {
  billModel.find((err, data) => {
    if (!data || data.length === 0) {
      billData.forEach(item => {
        item.id = getGuid()
        item.userid = userid,
        item.orderno = getOrderId()
        billModel.create(item)
      })
    }
  })
}

export default billModel
