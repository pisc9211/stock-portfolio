import React from 'react'
import { AuthProvider } from '../Auth'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignIn from './SignIn'
import Register from './Register'
import Portfolio from './Portfolio'
import Transaction from './Transaction'

import PrivateRoute from '../PrivateRoute'

import './App.css'


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container bg-white">
          <Route path="/" exact component={SignIn} />
          <PrivateRoute component={Portfolio} path="/" />
          <Route path="/register" component={Register} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/transaction" component={Transaction} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;