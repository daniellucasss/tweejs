const server = require('./config/server')
const jwt = require('restify-jwt')

const modelGetter = require('./models/modelGetter')
const logger = require('./config/logger')

server.get('/', (req, res) => {
  res.send('MAIN PAGE')
})

server.get('/post', (req, res) => {
  modelGetter.Post.findOne((err, post) => {
    if(err) return
    console.log(post)
  })
})

server.listen(8080, () => {
  logger.info('App is up!')
})