const log4js = require('log4js')
const logger = log4js.getLogger('Tweejs')
log4js.configure({
  appenders: { tweejs: {type: 'file', filename: 'tweejs.log'} },
  categories: { 
    default: { appenders: ['tweejs'], level: 'trace' }
  }
})

module.exports = logger