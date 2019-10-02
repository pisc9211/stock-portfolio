import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import SearchItem from './SearchItem'

const Buy = ({ user, getUser }) => {
  const [stocks, setStocks] = useState({
    tickerName: '',
    stockAmount: '',
    stockName: ''
  })

  // For Search - Possible Feature 

  // const [suggestions, setSuggestions] = useState([])
  // const [showMatches, setMatches] = useState(false)

  // useEffect(() => {
  //   // throttling the api calls bcuz of limited api calls per minute with free api key
  //   if(stocks.tickerName.length % 2 === 0) {
  //     axios
  //       .get(
  //         `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stocks.tickerName}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_APIKEY}`
  //       )
  //       .then(d => {console.log(d.data.bestMatches); return d})
  //       .then(({data}) => setSuggestions(data.bestMatches))
  //   }
  // }, [stocks])

  const handleOnClick = e => {
    e.preventDefault()
    let tickerNames = user.stocks.map(stock => stock.tickerName)
    let index = tickerNames.indexOf(stocks.tickerName.toLowerCase())
    let { stockName, stockAmount, tickerName } = stocks;
    if (index > -1) {
      axios.post('api/user/updatestock', {uid: user.uid, stockName, tickerName, stockOwned: (user.stocks[index].stockOwned + Number(stockAmount)), stockAmount: Number(stockAmount)}).then(() => getUser())
    } else {
      axios.post('api/user/addstock', {uid: user.uid, tickerName, stockOwned: stockAmount, stockAmount: stockAmount}).then(() => getUser())
    }
    setStocks({
      tickerName: "",
      stockAmount: "",
      stockName: ""
    });
    // getUser()
  }

  const handleOnChange = e => setStocks({...stocks, [e.target.id]: e.target.value})

  return (
    <form className="align-items-center mt-5">
      <h4 className="text-center text-uppercase">
        Cash: ${user ? user.balance : null}
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
        />
      </div>
      <button onClick={handleOnClick} className="btn btn-primary w-100">Buy Stock!</button>
    </form>
  );
}

export default Buy