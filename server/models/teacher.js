import mongoose from 'mongoose'
import teacherData from '../initData/teacher.js'
import { getGuid } from '../../src/utils/utils.js'
const Schema = mongoose.Schema
const TeacherSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  job: String,
  introduction: String
})

const teacherModel = mongoose.model('teacher', TeacherSchema)
// 判断有没有数据，没有则初始化
teacherModel.find((err, data) => {
  if (!data || data.length === 0) {
    teacherData.forEach(item => {
      item.id = getGuid()
      teacherModel.create(item)
    })
  }
})

export default teacherModel

