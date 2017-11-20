const bcrypt = require('bcrypt')

const passwordEncrypter = function(user, next) {
  bcrypt.hash(user.password, 13, (err, hash) => {
    if (err) return
    user.password = hash
    next()
  })
}

const userHasSamePassword = function(user, passwordNonEncrypted) {
  return bcrypt.compareSync(passwordNonEncrypted, user.password)
}

module.exports = {
  passwordEncrypter: passwordEncrypter,
  userHasSamePassword: userHasSamePassword
}