import React from 'react'
import * as moment from 'moment'

const TransactionItem = ({ transaction }) => {
  let date = moment(transaction.date).format("dddd, MMM Do YYYY, h:mm:ss A")
  return (
    <li className="p-3 border border-blue">
      {transaction.tickerName.toUpperCase()} - {transaction.stockAmount} bought - @{" "}
      {date} for ${Number(transaction.transactionPrice).toFixed(2)}
    </li>
  );
}

export default TransactionItem