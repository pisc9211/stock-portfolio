const User = require('../models/User')
const { Stock } = require('../models/Stock');
const { Transaction } = require('../models/Transaction');

let getUser = uid => {
  return User.findOneAndUpdate({ uid: uid }, {}, {upsert: true, new: true}, (err, res) => {
    if (!err) {
      if (!res) {
        res = new User({uid:uid})
      
        res.save((err, doc) => {
          if (!err) {
            return doc
          } else {
            res.send(err)
          }
        })
      }
      return res
    }
  })
}

let addStock = data => {
  let { uid, tickerName, stockName, stockOwned, stockAmount, transactionPrice, balance } = data
  let newStock = new Stock ({
    tickerName: tickerName,
    stockName: stockName,
    stockOwned: stockOwned
  })

  let newTransaction = new Transaction({
    uid: uid,
    stockName: stockName,
    tickerName: tickerName,
    transactionType: "buy",
    stockAmount: stockAmount,
    transactionPrice: transactionPrice
  });

  return User.updateOne({ uid: uid }, { $set:{ balance: balance }, $push: { stocks: newStock, transactions: newTransaction }})
}

let updateStock = data => {
  let { uid, tickerName, stockOwned, stockName, stockAmount, transactionPrice, balance } = data

  let newTransaction = new Transaction({
    uid: uid,
    stockName: stockName,
    tickerName: tickerName,
    transactionType: "buy",
    stockAmount: stockAmount,
    transactionPrice: transactionPrice
  });

  return User.updateOne({ uid: uid }, { $addToSet: { transactions: newTransaction } })
    .then(() => 
      User.findOneAndUpdate(
        { uid: uid, 'stocks.tickerName': tickerName }, 
        { $set: {balance: balance, 'stocks.$.stockOwned': stockOwned} }, 
        { new: true, upsert: true }, 
        (err) => console.error('error:', err))
    )
  
}

module.exports = {
  getUser,
  // addTransaction,
  updateStock,
  addStock
}