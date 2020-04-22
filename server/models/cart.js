import mongoose from 'mongoose'
const Schema = mongoose.Schema
const CartSchema = new Schema({
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
})

const cartModel = mongoose.model('cart', CartSchema)

export default cartModel
