import monoose from 'mongoose'
import couponData from '../initData/coupon.js'
import { getGuid, getOrderId } from '../../src/utils/utils.js'
const Schema = monoose.Schema
const CouponSchema = new Schema({
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
  orderid: {
    type: String,
    default: ''
  },
  number: {
    type: Number,
    required: true
  },
  limit: {
    type: Number,
    required: true
  },
  starttime: {
    type: String,
    required: true
  },
  endtime: {
    type: String,
    required: true
  },
  usetime: {
    type: String,
    default: ''
  },
  range: {
    code: Number,
    text: String
  },
  status: {
    code: Number,
    text: String
  }
})

const couponModel = monoose.model('coupon', CouponSchema)

// 判断有无数据，没有则初始化
export function initUserCoupons (userid) {
  couponModel.find((error, data) => {
    if (!data || data.length === 0) {
      couponData.forEach(item => {
        item.id = getGuid()
        item.userid = userid
        if (+item.status.code === 1) {
          item.orderid = getOrderId()
          item.usetime = new Date().toISOString().substring(0, 10)
        }
        couponModel.create(item)
      })
    }
  })
}

export default couponModel
