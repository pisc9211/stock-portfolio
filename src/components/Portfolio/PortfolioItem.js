import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { TiArrowSortedUp } from 'react-icons/ti'
import { TiMinus } from 'react-icons/ti'

const PortfolioItem = ({ stock, i }) => {
  const stockTicker = parseFloat(stock["02. open"]) - parseFloat(stock["05. price"])
  const color = (stockTicker) => {
    return stockTicker > 0 ? 'text-danger' : stockTicker < 0 ? 'text-success' : 'text-secondary'
  } 
  
  return (
    <li className="p-3 border border-blue">
      <div className={`h4 ${color(stockTicker)} d-inline-block mx-2`}>
        {
          stockTicker > 0 ? 
          <TiArrowSortedDown className={color(stockTicker)} fontSize={'3rem'}/> :
            stockTicker < 0 ? 
            <TiArrowSortedUp className={color(stockTicker)} fontSize={'3rem'}/> :
              <TiMinus className={color(stockTicker)}  fontSize={'3rem'}/>
            }
        {stock.tickerName.toUpperCase()}
      </div>
      <div className="h4 d-inline-block mx-2">{stock.stockOwned} Stock owned @ ${parseFloat(stock["05. price"])}</div>
    </li>
  )
}

export default PortfolioItem