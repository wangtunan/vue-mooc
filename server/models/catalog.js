import mongoose from 'mongoose'
const Schema = mongoose.Schema
const CatalogSchema = new Schema({
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
  introduction: {
    type: String,
    default: ''
  },
  isComplete: {
    type: Boolean,
    default: false
  },
  chapter: [
    {
      title: String,
      introduction: String,
      term: [
        {
          title: String,
          seconds: {
            type: Number,
            default: 0
          }
        }
      ]
    }
  ]
})

const catalogModel = mongoose.model('catalog', CatalogSchema)

export default catalogModel
