import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Portfolio from '../Portfolio'
import Transaction from '../Transaction'

const Home = ({ currentUser }) => {
  const [user, updateUser] = useState(null)

  const getUser = () => {
    axios.get(`/api/user/${currentUser.uid}`).then(d => {
      updateUser(d.data);
    });
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <Route path='/' exact render={() => <Portfolio user={user} getUser={getUser}/>} />
      <Route path='/transaction' render={() => <Transaction transactions={user.transactions} />} />
    </>
  )
}

export default Home