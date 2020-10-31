const mongoose = require('mongoose')

module.exports = mongoose.model('show', {
  title: {
    type: String,
    required: true,
  },
  band: {
    type: mongoose.Types.ObjectId,
    ref: 'band',
  },
})
