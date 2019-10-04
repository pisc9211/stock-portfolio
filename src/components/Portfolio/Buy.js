import React, { useState } from 'react'
import axios from 'axios'

import { getApiKey } from '../../helper'

// import SearchItem from './SearchItem'

const Buy = ({ user, getUser }) => {
  const [stocks, setStocks] = useState({
    tickerName: '',
    stockAmount: '',
    stockName: ''
  })

  const handleOnChange = e => setStocks({...stocks, [e.target.id]: e.target.value})

  const checkStockExists = e => {
    e.preventDefault()
    if (parseFloat(stocks.stockAmount) !== parseInt(stocks.stockAmount) || parseInt(stocks.stockAmount) < 0) {
      alert('Invalid Quanity. Please only put whole numbers!')
      return
    }
    axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stocks.tickerName}&apikey=${getApiKey()}`
    ).then(d => {
      if (d.data["Error Message"]) {
        alert('this stock does not exist!')
      } else if (d.data["Note"]) {
        alert('exceeded api request limit! please wait!')
      } else {
        console.log('the data from the stockcheck',d.data)
        let price = parseFloat(d.data["Global Quote"]["05. price"]) * parseInt(stocks.stockAmount)
        if (price > user.balance) {
          alert('you do not have enough money to buy these many stocks!')
        } else {
          handleOnClick(user.balance - price, parseFloat(d.data["Global Quote"]["05. price"]))
        }
      }
    }).catch(e => console.log('error!',e))
  }

  const handleOnClick = (newBalance, transactionPrice) => {
    let { stockName, stockAmount, tickerName } = stocks;
    let tickerNames = user.stocks.map(stock => stock.tickerName)
    let index = tickerNames.indexOf(tickerName.toLowerCase())
    if (index > -1) {
      axios.post('api/user/updatestock', {uid: user.uid, stockName, tickerName, stockOwned: (user.stocks[index].stockOwned + Number(stockAmount)), stockAmount: Number(stockAmount), balance: newBalance, transactionPrice: transactionPrice.toString()}).then(() => getUser())
    } else {
      axios.post('api/user/addstock', {uid: user.uid, tickerName, stockOwned: stockAmount, stockAmount: stockAmount, balance: newBalance, transactionPrice: transactionPrice.toString()}).then(() => getUser())
    }
    setStocks({
      tickerName: "",
      stockAmount: "",
      stockName: ""
    });
    // getUser()
  }


  return (
    <form className="align-items-center mt-5">
      <h4 className="text-center text-uppercase">
        Balance: ${user ? user.balance.toFixed(2) : null}
      </h4>
      <div className="form-label-group my-3">
        <label htmlFor="stock" className="mb-1 pl-2">
          Stock Ticker
        </label>
        <input
          type="tickerName"
          id="tickerName"
          className="form-control"
          placeholder="Enter Stock Ticker"
          onChange={handleOnChange}
          value={stocks.tickerName}
        />
      </div>
      {/* <ul>
        {suggestions ? suggestions.map((sug, i) => <SearchItem key={i} sug={sug} />) : null}
      </ul> */}
      <div className="form-label-group my-3">
        <label htmlFor="quantity" className="mb-1 pl-2">
          Quantity
        </label>
        <input
          type="number"
          id="stockAmount"
          className="form-control"
          placeholder="Quantity"
          onChange={handleOnChange}
          value={stocks.stockAmount}
          min="1"
          step="1"
        />
      </div>
      <button onClick={checkStockExists} className="btn btn-primary w-100">Buy Stock!</button>
    </form>
  );
}

export default Buy