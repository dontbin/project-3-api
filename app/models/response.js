const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  response: {
    questionOne: {
      type: String,
      required: true
    },
    questionTwo: {
      type: String,
      required: true
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Response', responseSchema)
