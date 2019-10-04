const User = require('../models/User')
const { Stock } = require('../models/Stock');
const { Transaction } = require('../models/Transaction');


// let getUser = uid => {
//   console.log('running hte getUser fn')
//   return User.find({ uid: uid }, async function(err, result) {
//     console.log(result.length)
//     if (result.length === 0) {
//       let user = new User({
//         uid: uid
//       });
//       console.log('created new user, now have to save')
//       await user.save(err => {
//         if (err) console.error(err);
//         else console.log("new user!");
//       })
//       return await User.find({uid:uid})
//     }
//   })
// }

let getUser = uid => {
  return User.findOneAndUpdate({ uid: uid }, {}, {upsert: true, new:  true}, (err, res) => {
    if (!err) {
      if (!res) {
        res = new User({uid:uid})
      }
      res.save((err, doc) => {
        if (!err) {
          return doc
        } else {
          throw err
        }
      })
    }
  })
}

let addStock = data => {
  console.log('running addStock', data)
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
  console.log('running updateStock', data)
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