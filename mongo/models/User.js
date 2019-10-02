const mongoose = require('mongoose');
const Schema = mongoose.Schema
const { StockSchema } = require('./Stock')
const { TransactionSchema } = require('./Transaction')

let UserSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  balance: {type: Number, default: 5000},
  stocks: [StockSchema],
  transactions: [{type: TransactionSchema, unique: true}]
})

let User = mongoose.model('User', UserSchema)

module.exports = User