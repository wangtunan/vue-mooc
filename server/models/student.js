import mongoose from 'mongoose'
import studentData from '../initData/student.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const StudentSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  avatar: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    text: String,
    code: Number
  },
  number: {
    type: Number,
    default: 0
  }
})

const studentModel = mongoose.model('student', StudentSchema)
// 判断有没有数据，没有则初始化
studentModel.find((err, data) => {
  if (!data || data.length === 0) {
    studentData.forEach(item => {
      item.id = getGuid()
      studentModel.create(item)
    })
  }
})

export default studentModel
