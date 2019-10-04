import React from 'react'
import * as moment from 'moment'

const TransactionItem = ({ transaction }) => {
  let date = moment(transaction.date).format("dddd, MMM Do YYYY, h:mm:ss A")
  console.log(transaction)
  return (
    <li className="p-3 border border-blue">
      {transaction.tickerName.toUpperCase()} - {transaction.stockAmount} bought - @{" "}
      {date} for ${transaction.transactionPrice}
    </li>
  );
}

export default TransactionItem