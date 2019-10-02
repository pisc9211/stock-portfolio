import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Portfolio from '../Portfolio'
import Transaction from '../Transaction'

axios.get('/api/user/hello').then(d => console.log(d))

const Home = ({ currentUser }) => {
  const [user, updateUser] = useState(null)


  useEffect(() => {
    console.log('inside useEffect currentUser:', currentUser)
    axios.get(`/api/user/${currentUser.uid}`)
      .then(d => {
        console.log(d.data[0].balance)
        updateUser(d.data[0])
      });
  }, [currentUser])

  return (
    <>
      <Route path='/' exact render={() => <Portfolio user={user} />} />
      <Route path='/transaction' component={Transaction} />
    </>
  )
}

export default Home