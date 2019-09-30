import React from 'react'
import { Link } from 'react-router-dom'
import app from '../../firebase'

const Portfolio = () => {
  return (
    <div className="container">
      <ul className="nav justify-content-end">
        <li className="nav-item border-right border-white">
          <Link className="nav-link active text-decoration-none disabled" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-decoration-none" to="/transaction">Transaction</Link>
        </li>
        <li className="nav-item">
          <a onClick={() => app.auth().signOut()} className="nav-link text-decoration-none">Sign Out</a>
        </li>
      </ul>
      <div className="h2">Portfolio</div>
      <div className="row">
        <div className="col-10 col-md-7 col-lg-8 border border-warning">

        </div>
        <div className="col-10 col-md-5 col-lg-4 border border-success">

        </div>
      </div>
    </div>
  )
}

export default Portfolio