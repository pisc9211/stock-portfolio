import React from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Portfolio from '../Portfolio'
import Transaction from '../Transaction'

axios.get('/hello').then(d => console.log(d))

const Home = () => {
  return (
    <>
      <Route path='/' exact component={Portfolio} />
      <Route path='/transaction' component={Transaction} />
    </>
  )
}

export default Home