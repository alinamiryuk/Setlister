const express = require('express')
const bcrypt = require('bcrypt')
const Band = require('../models/Band')
const errorHandler = require('../utils/errorHandler')
const { issueJWT } = require('../utils/issueJWT')
const router = express.Router()

router.post('/signup', async (req, res) => {
  try {
    const { userName, email } = req.body
    const newUserNameCheck = await Band.findOne({ userName })
    const newUserEmailCheck = await Band.findOne({ email })
    if (newUserNameCheck) {
      res.status(409).json({
        message: 'User already exists. Change your username!',
      })
    } else if (newUserEmailCheck) {
      res.status(409).json({
        message: 'User already exists. Change your email!',
      })
    } else {
      const band = new Band({
        userName: req.body.userName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      })
      await band.save()

      const token = issueJWT(band)
      res.status(200).json({
        token,
        bandname: userName,
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
    await Band.findOne({
      userName,
    }).then((band) => {
      if (!band) {
        res.status(401).json({ success: false, msg: 'Could not find band!' })
      }
      if (bcrypt.compareSync(password, band.password)) {
        const token = issueJWT(band)
        res.status(200).json({
          token,
          bandname: userName,
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
