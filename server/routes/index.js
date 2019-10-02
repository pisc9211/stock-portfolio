const express = require('express')
const apiRouter = express.Router()

const db = require('../../mongo')

apiRouter.use(express.json())

apiRouter.get('/user/hello', (req, res) => {
  console.log('hellllllllllo')
  res.send('helllllllo')
})

apiRouter.get("/user/:uid", (req, res) => {
  console.log(req.params.uid)
  db.getUser(req.params.uid)
    .then(user => res.json(user))
    .catch(e => res.send(e));
});

apiRouter.post('/user/addstock', (req, res) => {
  db.addStock(req.body)
    .then(data => res.json(data))
    .catch(e => console.error(e))
})

apiRouter.post('/user/updatestock', (req, res) => {
  db.updateStock(req.body) 
    .then(data => res.json(data))
    .catch(e => res.send(e))
  
})

module.exports = apiRouter