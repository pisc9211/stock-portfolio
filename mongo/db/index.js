const User = require('../models/User')
const { Stock } = require('../models/Stock');
const { Transaction } = require('../models/Transaction');

let getUser = uid => {
  return User.findOneAndUpdate({ uid: uid }, {}, {upsert: true, new: true}, (err, res) => {
    if (!err) {
      if (!res) {
        // if no user found, create a new user
        res = new User({uid:uid})
        // save new user to db
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
  // add new stock + new transaction + update the balance of user
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

  // add a new transaction + update stock's numberOwned + update user balance
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
  updateStock,
  addStock
}