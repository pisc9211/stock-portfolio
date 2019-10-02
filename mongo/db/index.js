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

// let addTransaction = data => {
//   console.log('running addtransaction')
//   let { uid, stockName, tickerName, stockAmount, tranasctionPrice } = data
//   let newTransaction = new Transaction({
//     uid: uid,
//     stockName: stockName,
//     tickerName: tickerName,
//     transactionType: 'buy',
//     stockAmount: stockAmount,
//     tranasctionPrice: tranasctionPrice
//   })

//   return User.updateOne({ uid: uid }, { $push: { transactions: newTransaction } })
// };

let addStock = data => {
  console.log('running addStock')
  let { uid, tickerName, stockName, stockOwned, stockAmount, transactionPrice } = data
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
    tranasctionPrice: transactionPrice
  });

  return User.updateOne({ uid: uid }, { $push: { stocks: newStock, transactions: newTransaction }})
}

let updateStock = data => {
  console.log('running updateStock')
  let { uid, tickerName, stockOwned, stockName, stockAmount, transactionPrice } = data

  let newTransaction = new Transaction({
    uid: uid,
    stockName: stockName,
    tickerName: tickerName,
    transactionType: "buy",
    stockAmount: stockAmount,
    tranasctionPrice: transactionPrice
  });

  return User.updateOne({ uid: uid }, { $addToSet: { transactions: newTransaction } })
    .then(() => 
      User.findOneAndUpdate(
        { uid: uid, 'stocks.tickerName': tickerName }, 
        { $set: {'stocks.$.stockOwned': stockOwned} }, 
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