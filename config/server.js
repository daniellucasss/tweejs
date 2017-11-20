const restify = require('restify')
const server = restify.createServer()
server.use(restify.plugins.bodyParser({ mapParams: true }))

const logger = require('./logger')
require('./routes')(server, logger)

module.exports = server