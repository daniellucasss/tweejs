const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const modelGetter = require('./../models/modelGetter')

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
//TODO: Put this secret key on a separated file
opts.secretOrKey = 'secretstuff'

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  modelGetter.User.findOne({ login: jwt_payload.login }, (err, user) => {
    if (err) return done(err, false)
    if (user) return done(null, user)
    else return done(null, false)
  })
}))

module.exports = passport