const mongoose = require('mongoose')

module.exports = mongoose.model('song', {
  title: {
    type: String,
    required: true,
  },
  show: {
    type: mongoose.Types.ObjectId,
    ref: 'show',
  },
})
