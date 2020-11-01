const mongoose = require('mongoose')

module.exports = mongoose.model('band', {
  name: {
    type: String,
    required: true,
  },
  day: {
    type: mongoose.Types.ObjectId,
    ref: 'day',
  },
})
