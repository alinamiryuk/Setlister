const express = require('express')
const Day = require('../models/Day')
const errorHandler = require('../utils/errorHandler')
const router = express.Router()

router
  .route('/')
  .get(async (req, res) => {
    const festivalsDays = await Day.find({ festival: req.festival.festivalID })
    res.json(festivalsDays)
  })
  .delete(async (req, res) => {
    const { _id } = req.body
    const day = await Day.findByIdAndDelete(_id)
    return res.status(200).end()
  })
  .post(async (req, res) => {
    try {
      const { title } = req.body
      const day = new Day({
        title,
        festival: req.festival.festivalID,
      })
      await day.save()
      res.end()
    } catch (e) {
      errorHandler(res, e)
    }
  })
  .patch(async (req, res) => {
    const { _id, newTitle } = req.body
    const day = await Day.findById(_id)
    if (day) {
      day.title = newTitle
      await day.save()
      return res.status(200).end()
    }
    return res.status(400).end()
  })

module.exports = router
