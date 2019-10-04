import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import app from '../../firebase'
import PortfolioList from './PortfolioList'
import Buy from './Buy'
import axios from 'axios'

import { getApiKey } from '../../helper'

const Portfolio = ({ user, getUser }) => {
  const [stockData, setStockData] = useState(null)
  const [portfolioTotal, setPortfolioTotal] = useState(null)

  useEffect(() => {
    if (user) {
      let stocks = user.stocks.map(stock => stock.tickerName)
      let apiCalls = stocks.map(stock =>
        axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${getApiKey()}`
        ).then(d => d.data)
      )
      Promise.all(apiCalls).then(d => {
        let stockData = [];
        let portfolioTotal = 0;

        for (let i = 0; i < stocks.length; i++) {
          let combinedData = Object.assign({}, d[i]["Global Quote"], user.stocks[i])
          stockData.push(combinedData)
          portfolioTotal += (parseFloat(combinedData["05. price"]) * parseInt(combinedData.stockOwned))
        }
        setPortfolioTotal(portfolioTotal.toFixed(2))
        setStockData(stockData)
      })
    }
  }, [user])

  return (
    <div className="container">
      <ul className="nav justify-content-end">
        <li className="nav-item border-right border-white">
          <Link className="nav-link active text-decoration-none disabled" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none" to="/transaction">Transaction</Link>
        </li>
        <li className="nav-item">
          <button onClick={() => app.auth().signOut()} className="nav-link text-decoration-none">Sign Out</button>
        </li>
      </ul>
      <div className="h2">Portfolio: ${portfolioTotal}</div>
      <div className="row">
        <div className="col-10 col-md-7 col-lg-8">
          <PortfolioList stocks={stockData ? stockData : null} />
        </div>
        <div className="col-10 col-md-5 col-lg-4">
          <Buy user={user} getUser={getUser}/>
        </div>
      </div>
    </div>
  )
}

export default Portfolio