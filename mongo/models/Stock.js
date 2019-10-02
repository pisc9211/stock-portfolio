const mongoose = require('mongoose');
const Schema = mongoose.Schema

let StockSchema = new Schema({
  stockName: String,
  tickerName: String,
  stockOwned: Number
})

let Stock = mongoose.model('Stock', StockSchema)

module.exports = {
  Stock,
  StockSchema
}