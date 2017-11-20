const mongoose = require('mongoose')
const Schema = mongoose.Schema

const passwordUtils = require('./../config/passwordUtils')

let UserSchema = new Schema({
  name: String,
  login: String,
  password: String,
  created_at: { type: Date, default: Date.now }
})

UserSchema.pre('save', function(next) {
  let user = this
  passwordUtils.passwordEncrypter(user, next)
})

module.exports = mongoose.model('User', UserSchema)