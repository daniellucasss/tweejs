const jwt = require('jwt-simple')

const modelGetter = require('./../models/modelGetter')
const passwordUtils = require('./passwordUtils')
const passport = require('./passport')

const init = function(server, logger) {
  server.use(passport.initialize())
  server.get('/', (req, res) => {
    res.send('API')
  })
      
  server.get('/posts', (req, res) => {
    modelGetter.User.findOne((err, post) => {
      if(err) return
      console.log(post)
    })
  })
        
  server.get('/testing', passport.authenticate('jwt', { session: false }),(req, res, next) => {
    res.send('Authenticated path test')
  })
     
  server.post('/authenticate', (req, res) => {
    modelGetter.User.findOne({ login: req.body.login }, (err, user) => {
      if (err) {
        logger.error(err) 
        res.status(500)
        res.send('Error')
      }
      if (user && passwordUtils.userHasSamePassword(user, req.body.password)) {
        logger.info('User ' + user.name + ' logged!')
        const payload = { login: user.login }
        const token = jwt.encode(payload, 'secretstuff')
        logger.info('Token ' + token + ' generated!')
        res.json({ token: token})
      } else {
        res.status(401)
        res.send('Login or password not match')
      }
    })
  })
}

module.exports = init