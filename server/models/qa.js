import mongoose from 'mongoose'
const Schema = mongoose.Schema
const QaSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  lessonid: String,
  list: [
    {
      title: String,
      avatar: String,
      answers: Number,
      views: Number,
      chapter: String,
      time: String,
      answer: {
        teacher: String,
        content: String
      },
      status: {
        text: String,
        code: Number
      }
    }
  ]
})

const qaModel = mongoose.model('qa', QaSchema)

export default qaModel
