const mongoose = require('mongoose');
const Schema = mongoose.Schema
const StockSchema = require('./Url').StockSchema

let UserSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  balance: {type: Number, default: 5000},
  stocks: [StockSchema]
})

let User = mongoose.model('User', UserSchema)

module.exports = User