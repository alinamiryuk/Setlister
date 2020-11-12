const express = require('express')
const morgan = require('morgan')
const app = express()
const authRouter = require('./routes/auth')
const dayRouter = require('./routes/day')

app.use(morgan('dev'))
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth', authRouter)
app.use('/api/day', dayRouter)

module.exports = app
