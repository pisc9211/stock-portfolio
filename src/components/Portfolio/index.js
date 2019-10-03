import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import app from '../../firebase'
import PortfolioList from './PortfolioList'
import Buy from './Buy'
import axios from 'axios'

const Portfolio = ({ user, getUser }) => {
  console.log('user inside portfolio:', user)
  const [stockData, setStockData] = useState(null)

  useEffect(() => {
    if (user) {
      let stocks = user.stocks.map(stock => stock.tickerName)
      let apiCalls = stocks.map(stock =>
        axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_APIKEY}`
        ).then(d => d.data)
      )
      Promise.all(apiCalls).then(d => {console.log('promise.allllll:',d);setStockData(d)})
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
      <div className="h2">Portfolio</div>
      <div className="row">
        <div className="col-10 col-md-7 col-lg-8 border border-warning">
          <PortfolioList stocks={user ? user.stocks : null} getUser={getUser}/>
        </div>
        <div className="col-10 col-md-5 col-lg-4 border border-success">
          <Buy user={user} getUser={getUser}/>
        </div>
      </div>
      {stockData ? stockData.map(stock => <div>{stock["Global Quote"]["02. open"]}</div>) : null}
    </div>
  )
}

export default Portfolio