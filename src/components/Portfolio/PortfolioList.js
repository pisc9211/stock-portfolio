import React from 'react'
import PortfolioItem from './PortfolioItem'

const PortfolioList = ({ stocks }) => {
  return (
    <ul className='mt-5 m-3 list-unstyled'>
      {stocks && stocks.length > 0 ? stocks.map((stock, i) => <PortfolioItem key={stock.tickerName} i={i} stock={stock} />) : <div className="h4">No Stock Owned ... Yet</div> }
    </ul> 
  )
}

export default PortfolioList