const jwt = require('jsonwebtoken')

const signIn = (obj) => {
  jwt.sign(obj, 'key', {
    expiresIn: 300
  })
}

const verify = (token) => {
  jwt.verify(token, 'key', (err, decoded) => {
    if (err) return null
    return decoded
  })
}

const decode = (token) => {
  jwt.decode(token, 'key', (err, decoded) => {
    if (err) return null
    return decoded
  })
}

module.exports = {
  signIn: signIn,
  verify: verify,
  decode: decode
}