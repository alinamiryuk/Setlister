const mongoose = require('mongoose')

module.exports = mongoose.model('band', {
  title: {
    type: String,
    required: true,
  },
  day: {
    type: mongoose.Types.ObjectId,
    ref: 'day',
  },
})
