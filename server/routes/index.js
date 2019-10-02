const express = require('express')
const apiRouter = express.Router()

apiRouter.use(express.json())

apiRouter.get('/user', function(req, res) {
  res.send("you've requested the user info!")
})

module.exports = apiRouter