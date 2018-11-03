const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
  surveyTitle: {
    type: String,
    required: true
  },
  surveyTopic: {
    type: String,
    required: true
  },
  surveyAdmin: {
    type: String,
    required: true
  },
  response: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Response',
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

module.exports = mongoose.model('Survey', surveySchema)
