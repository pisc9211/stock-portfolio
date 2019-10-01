const mongoose = require('mongoose')

console.log(process.env.REACT_APP_MONGODB_USERNAME);

mongoose.connect(
  `mongodb://${process.env.REACT_APP_MONGODB_USERNAME || 'root'}:${process.env.REACT_APP_MONGODB_PASSWORD || 'password123'}@ds229118.mlab.com:29118/stock-portfolio`,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

let db = mongoose.connection

db.on('error', function() {
  console.log('mongoose connection error')
})

db.once('open', function() {
  console.log('mongoose connected successfully')
})