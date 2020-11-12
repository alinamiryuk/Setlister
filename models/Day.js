const mongoose = require('mongoose')

module.exports = mongoose.model('day', {
  title: {
    type: String,
    required: true,
  },
  festival: {
    type: mongoose.Types.ObjectId,
    ref: 'festival',
  },
})
