
import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/Auth'

const PrivateRoute = ({ component: RouteComponent }) => {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <Route
      render={props => !!currentUser ? (<RouteComponent currentUser={currentUser} {...props} path="/" />) : (<Redirect to={'/signin'} />)}
    />
  )
}

export default PrivateRoute