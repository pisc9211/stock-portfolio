import React from "react";
import app from '../../firebase'

import { Link } from 'react-router-dom'

const Transaction = ({ transactions }) => {
  console.log(transactions)
  return (
    <div className="container">
      <ul className="nav justify-content-end">
        <li className="nav-item border-right border-white">
          <Link className="nav-link active text-decoration-none" to="/">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none disabled" to="/transaction">Transaction</Link>
        </li>
        <li className="nav-item">
          <button onClick={() => app.auth().signOut()} className="nav-link text-decoration-none">Sign Out</button>
        </li>
      </ul>
      <div className="h2">Transaction</div>
      <div className="row">
        <div className="col-10 col-md-7 col-lg-8 border border-warning">
          <ul>
            {transactions ? transactions.map(transaction => <li>{transaction.tickerName} - {transaction.stockAmount} bought - at {transaction.date} - {transaction._id}</li>) : null }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Transaction
