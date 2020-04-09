import mongoose from 'mongoose'
const Schema = mongoose.Schema
const AddressSchema = new Schema({
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
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  },
  isDefault: {
    type: Boolean,
    default: false
  }
})

const addressModel = mongoose.model('address', AddressSchema)

export default addressModel
