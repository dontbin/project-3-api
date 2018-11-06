const mongoose = require('mongoose')
const response = require('./response.js')

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  admin: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  responses: [response]
}, {
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
