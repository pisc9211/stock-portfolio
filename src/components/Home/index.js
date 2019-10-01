import React from 'react'
import { Route } from 'react-router-dom'

import Portfolio from '../Portfolio'
import Transaction from '../Transaction'

const Home = () => {
  return (
    <>
      <Route path='/' exact component={Portfolio} />
      <Route path='/transaction' component={Transaction} />
    </>
  )
}

export default Home