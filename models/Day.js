const mongoose = require('mongoose')

module.exports = mongoose.model('day', {
  date: {
    type: String,
    required: true,
  },
  festival: {
    type: mongoose.Types.ObjectId,
    ref: 'festival',
  },
})
