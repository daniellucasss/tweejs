const server = require('./config/server')
const logger = require('./config/logger')

server.listen(8080, () => {
  logger.info('App is up!')
})