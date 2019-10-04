const mongoose = require('mongoose');
const Schema = mongoose.Schema

let TransactionSchema = new Schema({
  date: {type: Date, default: Date.now()},
  stockName: String,
  tickerName: String,
  transactionType: String,
  stockAmount: Number,
  transactionPrice: String
})

let Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = {
  Transaction,
  TransactionSchema
}