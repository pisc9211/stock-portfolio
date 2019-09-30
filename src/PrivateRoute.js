
import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'

const PrivateRoute = ({ component: RouteComponent }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser, )
  return (
    <Route
      render={props => !!currentUser ? (<RouteComponent {...props} path="/" />) : (<Redirect to={'/signin'} />)}
    />
  )
}

export default PrivateRoute