import mongoose from 'mongoose'
const Schema =  mongoose.Schema
const UserLessonSchema = new Schema({
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
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  percent: {
    type: Number,
    default: 0
  },
  isFollow: {
    type: Boolean,
    default: false
  },
  exp: {
    type: Number,
    default: 0
  },
  hours: {
    type: Number,
    default: 0
  },
  notes: {
    type: Number,
    default: 0
  },
  codes: {
    type: Number,
    default: 0
  },
  questions: {
    type: Number,
    default: 0
  },
  type: {
    text: String,
    code: Number
  },
  lastChapter: {
    type: String,
    default: ''
  }
})

const userLessonModel = mongoose.model('userlesson', UserLessonSchema)

export default userLessonModel
