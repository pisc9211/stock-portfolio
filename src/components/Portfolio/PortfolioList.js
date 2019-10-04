import React from 'react'
import PortfolioItem from './PortfolioItem'

const PortfolioList = ({ stocks }) => {
  return (
    <ul className='mt-5 m-3 list-unstyled'>
      {stocks ? stocks.map((stock, i) => <PortfolioItem key={stock.tickerName} i={i} stock={stock} />) : null}
    </ul> 
  )
}

export default PortfolioList