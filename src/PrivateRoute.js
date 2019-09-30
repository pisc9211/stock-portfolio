import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

console.log('authcontext', AuthContext);
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  console.log(currentUser)
  const { currentUser } = useContext(AuthContext);
}

export default PrivateRoute;
