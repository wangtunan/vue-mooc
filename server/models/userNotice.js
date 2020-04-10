import mongoose from 'mongoose'
const Schema = mongoose.Schema
const UserNoticeSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  messageid: {
    type: String,
    required: true
  },
  userid: {
    type: String,
    required: true
  },
  isRead: {
    type: Boolean,
    default: false
  },
  isDelete: {
    type: Boolean,
    default: false
  }
})

const userNoticeModel = mongoose.model('usernotice', UserNoticeSchema)

export default userNoticeModel
