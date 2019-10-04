const express = require("express")
const app = express()
const path = require("path")
const apiRouter = require('./routes')

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use('/api', apiRouter);

// When deploying
app.use(express.static(path.join(__dirname, '/../build')))

app.listen(process.env.PORT || 5000, () =>
  console.log(`listening to port ${process.env.PORT || 5000}`)
);