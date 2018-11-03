const mongoose = require('mongoose')

const houseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  animal: {
    type: String,
    required: true
  },
  slogan: {
    type: String,
    required: true
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
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

module.exports = mongoose.model('House', houseSchema)
