import React, { useState } from 'react'

import { Link, withRouter, Redirect } from 'react-router-dom'
import app from '../../firebase'
import { AuthContext } from '../../Auth'

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const update = {
    email: setEmail,
    password: setPassword,
    firstName: setFirstName,
    lastName: setLastName
  };

  const handleOnChange = e => update[e.target.id](e.target.value)

  const handleOnSubmit = async e => {
    e.preventDefault()
    const {email, password, firstName, lastName} = e.target.elements;
    try {
      await app.auth().createUserWithEmailAndPassword(email.value, password.value)
      history.push('/')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="container vh-100">
      <div className="row align-items-center h-100">
        <form onSubmit={handleOnSubmit} className="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4 bg-white rounded shadow-lg">
          <div className="py-5 mb-3">
            <h2 className="text-center text-uppercase">Register</h2>
            <div className="form-label-group my-3">
              <label htmlFor="firstName" className="mb-1 pl-2 small">First Name</label>
              <input value={firstName} onChange={handleOnChange} type="text" id="firstName" className="form-control" placeholder="First Name" required />
            </div>
            <div className="form-label-group my-3">
              <label htmlFor="lastName" className="mb-1 pl-2">Last Name</label>
              <input value={lastName} onChange={handleOnChange} type="text" id="lastName" className="form-control" placeholder="Last Name" required />
            </div>
            <div className="form-label-group my-3">
              <label htmlFor="email" className="mb-1 pl-2">Email</label>
              <input value={email} onChange={handleOnChange} type="email" id="email" className="form-control" placeholder="Email Address" required />
            </div>
            <div className="form-label-group my-3">
              <label htmlFor="password" className="mb-1 pl-2">Password</label>
              <input value={password} onChange={handleOnChange} type="password" id="password" className="form-control" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100 mt-5">Register</button>
            <Link to="/" className="btn btn-primary d-block w-100 mt-3">Sign In</Link>
          </div> 
        </form>
      </div>
    </div>
  )
}

export default Register