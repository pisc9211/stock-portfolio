import React from 'react'

const PortfolioList = ({ stocks }) => {
  // console.log(user.stocks)
  return (
    <ul className='m-5 list-unstyled'>
      {stocks ? stocks.map((stock, i) => <li key={stock.tickerName} className="p-5 border border-blue">{stock.tickerName} - {stock.stockOwned}</li>) : null}
    </ul> 
  )
}

export default PortfolioList