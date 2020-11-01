const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const pathToKey = path.join(__dirname, '..', 'priv.pem')
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8')

module.exports.issueJWT = (festival) => {
  jwt.sign({ festivalId: festival._id }, PRIV_KEY, { expiresIn: '1h' })
}
