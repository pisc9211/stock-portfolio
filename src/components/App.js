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
          <PrivateRoute component={Portfolio} exact path="/" />
          {/* <PrivateRoute component={Transaction} exact path="/" /> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;