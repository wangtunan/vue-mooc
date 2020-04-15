import mongoose from 'mongoose'
const Schema = mongoose.Schema
const LessonSchema = new Schema({
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
  introduction: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    required: true
  },
  banner: {
    type: String,
    required: true
  },
  type: {
    text: String,
    code: {
      type: Number,
      enum: [0, 1, 2],
      default: 0
    }
  },
  hard: {
    text: String,
    code: Number
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
  },
  labels: [String],
  scripts: {
    text: String,
    code: Number
  },
  teacher: {
    name: String,
    avatar: String,
    introduction: String
  }
})
