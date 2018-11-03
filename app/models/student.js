const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  },
  house: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'House',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Student', studentSchema)
