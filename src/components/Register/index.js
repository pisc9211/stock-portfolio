import React, { useState } from 'react'

import { Link, withRouter } from 'react-router-dom'
import app from '../../firebase'

const Register = ({ history }) => {;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleOnChange = e => setForm({...form, [e.target.id]: e.target.value})

  const handleOnSubmit = async e => {
    e.preventDefault()
    try {
      // create firebase account
      await app.auth().createUserWithEmailAndPassword(form.email, form.password)
      // add displayName to account
      await app.auth().currentUser.updateProfile({
        displayName: `${form.firstName} ${form.lastName}`
      })
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
              <input value={form.firstName} onChange={handleOnChange} type="text" id="firstName" className="form-control" placeholder="First Name" required />
            </div>
            <div className="form-label-group my-3">
              <label htmlFor="lastName" className="mb-1 pl-2">Last Name</label>
              <input value={form.lastName} onChange={handleOnChange} type="text" id="lastName" className="form-control" placeholder="Last Name" required />
            </div>
            <div className="form-label-group my-3">
              <label htmlFor="email" className="mb-1 pl-2">Email</label>
              <input value={form.email} onChange={handleOnChange} type="email" id="email" className="form-control" placeholder="Email Address" required />
            </div>
            <div className="form-label-group my-3">
              <label htmlFor="password" className="mb-1 pl-2">Password</label>
              <input value={form.password} onChange={handleOnChange} type="password" id="password" className="form-control" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100 mt-5">Register</button>
            <Link to="/signin" className="btn btn-primary d-block w-100 mt-3">Sign In</Link>
          </div> 
        </form>
      </div>
    </div>
  )
}

export default withRouter(Register)