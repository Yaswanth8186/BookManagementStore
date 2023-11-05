const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://Admin:veeraprasad12@cluster0.4k9i1ag.mongodb.net/BookStore-DB'
)

const db = mongoose.connection

db.on('error', (error) => {
  console.log('error to connecting with database')
})

db.once('open', function () {
  console.log('Successfully connected to database')
})
