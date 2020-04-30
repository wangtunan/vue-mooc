import mongoose from 'mongoose'
const Schema = mongoose.Schema
const CommentSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  lessonid: {
    type: String,
    required: true
  },
  list: [
    {
      name: String,
      avatar: String,
      content_score: {
        type: Number,
        default: 10
      },
      easy_score: {
        type: Number,
        default: 10
      },
      logic_score: {
        type: Number,
        default: 10
      },
      comment: {
        type: String,
        default: ''
      },
      time: String
    }
  ]
})

const commentModel = mongoose.model('comment', CommentSchema)

export default commentModel
