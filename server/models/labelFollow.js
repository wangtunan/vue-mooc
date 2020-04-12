import mongoose from 'mongoose'
const Schema = mongoose.Schema
const LabelFollowSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  userid: {
    type: String,
    required: true,
  },
  labelid: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const labelFollowModel = mongoose.model('labelfollow', LabelFollowSchema)

export default labelFollowModel
