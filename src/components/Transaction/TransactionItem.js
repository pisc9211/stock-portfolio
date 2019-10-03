import React from 'react'

const TransactionItem = ({ transaction }) => {
  return (
    <li>
      {transaction.tickerName} - {transaction.stockAmount} bought - at{" "}
      {transaction.date} - {transaction._id}
    </li>
  );
}

export default TransactionItem