const express = require('express')
const bcrypt = require('bcrypt')
const Festival = require('../models/Festival')
const errorHandler = require('../utils/errorHandler')
const { issueJWT } = require('../utils/issueJWT')
const router = express.Router()

router.post('/signup', async (req, res) => {
  try {
    const { userName, email } = req.body
    const newUserNameCheck = await Festival.findOne({ userName })
    const newUserEmailCheck = await Festival.findOne({ email })
    if (newUserNameCheck) {
      res.status(409).json({
        message: 'User already exists. Change your username!',
      })
    } else if (newUserEmailCheck) {
      res.status(409).json({
        message: 'User already exists. Change your email!',
      })
    } else {
      const festival = new Festival({
        userName: req.body.userName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      })
      await festival.save()

      const token = issueJWT(festival)
      res.status(200).json({
        token,
        festivalname: userName,
        festivalID: festival.id,
        success: true,
      })
    }
  } catch (e) {
    errorHandler(e, res)
  }
})

router.post('/login', async (req, res) => {
  try {
    const { userName, password } = req.body
    await Festival.findOne({
      userName,
    }).then((festival) => {
      if (!festival) {
        res.status(401).json({ success: false, msg: 'Could not find festival!' })
      }
      if (bcrypt.compareSync(password, festival.password)) {
        const token = issueJWT(festival)
        res.status(200).json({
          token,
          festivalname: userName,
          festivalID: festival.id,
          success: true,
        })
      } else {
        res
          .status(401)
          .json({ success: false, msg: 'You entered the wrong password!' })
      }
    })
  } catch (e) {
    errorHandler(res, e)
  }
})

module.exports = router
