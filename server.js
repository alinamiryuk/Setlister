require('dotenv').config()
const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')
const DB_KEY = process.env.DB_KEY
const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log(`port ${PORT}`)
  mongoose.connect(DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
})
