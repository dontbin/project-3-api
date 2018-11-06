const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  questionOne: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Response', responseSchema)
