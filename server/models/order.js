import mongoose from 'mongoose'
const Schema = mongoose.Schema
const OrderSchema = new Schema({
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
  code: {
    type: String,
    unique: true,
    required: true
  },
  time: String,
  status: {
    text: String,
    code: Number
  },
  way: {
    text: String,
    code: Number
  },
  expired: {
    type: Number,
    default: 30 * 60 * 1000
  },
  coupon: {
    type: Number,
    default: 0
  },
  list: [
    {
      lessonid: {
        type: String,
        required: true
      },
      
      img: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        default: 0
      },
      isDiscount: {
        type: Boolean,
        default: false
      },
      discountPrice: {
        type: Number,
        default: 0
      }
    }
  ]
})

const orderModel = mongoose.model('order', OrderSchema)

export default orderModel
