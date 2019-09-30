import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import SignIn from './SignIn'

import './App.css'


const App = () => {
  return (
    <div className="app-container bg-light">
      <SignIn />
    </div> 
  )
}

export default App;