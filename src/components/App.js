import React, { useEffect } from 'react'
import { AuthProvider } from '../context/Auth'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignIn from './SignIn'
import Register from './Register'
import Home from './Home'
import Transaction from './Transaction'

import PrivateRoute from './PrivateRoute'

import './App.css'


const App = () => {
  useEffect(() => {
    localStorage.setItem('api_index', 0);

    // return () => localStorage.clear()
  }, [])

  return (
    <AuthProvider>
      <Router>
        <div className="app-container bg-white">
          <PrivateRoute component={Home} exact path="/" />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;