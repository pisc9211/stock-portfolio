import React from 'react'

const PortfolioList = ({ stocks }) => {
  const data = [{stockName: 'msft', transactionType:'buy', stockAmount: 2, transactionPrice: 35.43 }, {stockName: 'msft', transactionType:'sell', stockAmount: 2, transactionPrice: 35.43 }, {stockName: 'msft', transactionType:'buy', stockAmount: 2, transactionPrice: 35.43 }]
  // console.log(user.stocks)
  return (
    <ul className='m-5 list-unstyled'>
      {stocks ? stocks.map(stock => <li className="p-5 border border-blue">{stock.tickerName} - {stock.stockOwned}</li>) : null}
    </ul> 
  )
}

export default PortfolioList