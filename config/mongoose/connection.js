const mongoose = require('mongoose')
const logger = require('./../logger')

const connectDB = () => {
  mongoose.connect('mongodb://localhost/tweejs').then(() => {
    logger.info('Mongodb connected')
  }).catch(() => {
    logger.error('Error trying to connect to Mongodb')
  })
}

connectDB()