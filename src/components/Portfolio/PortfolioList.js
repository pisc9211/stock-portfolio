import React from 'react'

const PortfolioList = ({ transactions }) => {
  const data = [{stockName: 'msft', transactionType:'buy', stockAmount: 2, transactionPrice: 35.43 }, {stockName: 'msft', transactionType:'sell', stockAmount: 2, transactionPrice: 35.43 }, {stockName: 'msft', transactionType:'buy', stockAmount: 2, transactionPrice: 35.43 }]
  return (
    <ul className='m-5 list-unstyled'>
      {data.map(d => <li className="p-5 border border-blue">d.stockName</li>)}
    </ul> 
  )
}

export default PortfolioList