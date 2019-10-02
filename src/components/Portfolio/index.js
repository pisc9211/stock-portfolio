import React from 'react'
import { Link } from 'react-router-dom'
import app from '../../firebase'
import PortfolioList from './PortfolioList'
import Buy from './Buy'

const Portfolio = ({ user, getUser }) => {
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
          <button onClick={() => app.auth().signOut()} className="nav-link text-decoration-none">Sign Out</button>
        </li>
      </ul>
      <div className="h2">Portfolio</div>
      <div className="row">
        <div className="col-10 col-md-7 col-lg-8 border border-warning">
          <PortfolioList stocks={user ? user.stocks : null} getUser={getUser}/>
        </div>
        <div className="col-10 col-md-5 col-lg-4 border border-success">
          <Buy user={user} getUser={getUser}/>
        </div>
      </div>
    </div>
  )
}

export default Portfolio