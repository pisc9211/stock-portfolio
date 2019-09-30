import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignIn from './SignIn'
import Register from './Register'
import Portfolio from './Portfolio'
import Transaction from './Transaction'

import './App.css'


const App = () => {
  return (
    <div className="app-container bg-light">
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/transaction" component={Transaction} />
      </Router>
    </div>
  );
}

export default App;