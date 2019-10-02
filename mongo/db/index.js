const User = require('../models/User')
const { Stock } = require('../models/Stock');
const { Transaction } = require('../models/Transaction');


let getUser = uid => {
  console.log('running hte getUser fn')
  return User.find({ uid: uid }, function(err, result) {
    console.log(result.length)
    if (result.length === 0) {
      let user = new User({
        uid: uid
      });
      console.log('created new user, now have to save')
      user.save(err => {
        if (err) console.error(err);
        else console.log("new user!");
      })
    }
  })
}

let addTransaction = data => {
  let { uid, stockName, tickerName, stockAmount, tranasctionPrice } = data
  let newTransaction = new Transaction({
    uid: uid,
    stockName: stockName,
    tickerName: tickerName,
    transactionType: 'buy',
    stockAmount: stockAmount,
    tranasctionPrice: tranasctionPrice
  })
  return User.updateOne({ uid: uid }, { $push: { transactions: newTransaction } })
};

let updateStock = data => {
  let { uid, tickerName, amount } = data
  return User.find({ uid: uid, 'stocks.name': tickerName }, {$set: {'stocks.stockOwned': amount}}, {new: true, upsert: true}, (err) => console.error(err))
}

module.exports = {
  getUser,
  addTransaction,
  updateStock
}