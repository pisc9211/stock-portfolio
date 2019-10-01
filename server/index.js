const express = require("express")
const app = express()
const path = require("path")

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.get('/hello', (req, res) => res.json({'hello':'hello'}))

app.listen(process.env.PORT || 5000, () =>
  console.log(`listening to port ${process.env.PORT || 5000}`)
);