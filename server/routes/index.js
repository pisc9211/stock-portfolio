const express = require('express')
const apiRouter = express.Router()

const db = require('../../mongo')

apiRouter.use(express.json())

apiRouter.get("/user/:uid", (req, res) => {
  console.log(req.params.uid)
  db.getUser(req.params.uid)
    .then(user => res.json(user))
    .catch(e => res.send(e));
});


apiRouter.post('/user/addstock', (req, res) => {
  db.addStock(req.body)
    .then(data => res.json(data))
    .catch(e => res.send(e))
})

apiRouter.post('/user/updatestock', (req, res) => {
  console.log('req.body', typeof req.body.transactionPrice)
  db.updateStock(req.body) 
    .then(data => res.json(data))
    .catch(e => res.send(e))
})

module.exports = apiRouter