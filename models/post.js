const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Post', new Schema({
  description: String,
  created_at: { type: Date, default: Date.now }
}))