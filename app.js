const express = require('express')
const morgan = require('morgan')
const app = express()
const authRouter = require('./routes/auth')

app.use(morgan('dev'))
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth', authRouter)

module.exports = app
