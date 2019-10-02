const mongoose = require('mongoose');
const Schema = mongoose.Schema

let StockSchema = new Schema({
  stockName: { type: String, required: true },
  tickerName: { type: String, required: true },
  stockOwned: { type: Number, required: true }
});

let Stock = mongoose.model('Stock', StockSchema)

module.exports = {
  Stock,
  StockSchema
}