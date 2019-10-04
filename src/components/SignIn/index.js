import React, { useState, useEffect, useContext } from 'react'

import { Link, withRouter, Redirect } from 'react-router-dom'
import app from '../../firebase'
import { AuthContext } from '../../context/Auth'

const SignIn = ({ history }) => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = e => setForm({...form, [e.target.id]: e.target.value})

  const handleOnSubmit = async e => {
    e.preventDefault()
    try {
      await app.auth().signInWithEmailAndPassword(form.email, form.password)
      history.push('/')
    } catch (error) {
      alert(error)
    }

  }

  const { currentUser } = useContext(AuthContext)

  if (currentUser) return <Redirect to="/" />

  return (
    <div className="container vh-100">
      <div className="row align-items-center h-100">
        <form onSubmit={handleOnSubmit} className="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4 bg-white rounded shadow-lg">
          <div className="py-5 mb-3">
            <h2 className="text-center text-uppercase">Sign In</h2>
            <div className="form-label-group my-3">
              <label htmlFor="email" className="mb-1 pl-2">Email</label>
              <input value={form.email} onChange={handleOnChange} type="email" id="email" className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-label-group my-3">
              <label htmlFor="password" className="mb-1 pl-2">Password</label>
              <input value={form.password} onChange={handleOnChange} type="password" id="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100 mt-5">Sign In</button>
            <Link to="/register" type="button" className="btn btn-primary d-block w-100 mt-3">Register</Link>
          </div> 
        </form>
      </div>
    </div>
  );
}

export default withRouter(SignIn)