const mongoose = require('mongoose');
const Schema = mongoose.Schema

let TransactionSchema = new Schema({
  date: {type: Date, default: Date.now()},
  stockBought: Number,
  stockPrice: Number
})

let Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = {
  Transaction,
  TransactionSchema
}