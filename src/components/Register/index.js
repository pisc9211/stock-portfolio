import React from 'react'

import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="container vh-100">
      <div className="row align-items-center h-100">
        <form className="col-12 col-md-6 offset-md-3 bg-white rounded shadow-lg">
          <div className="py-5 mb-3">
            <h2 className="text-center text-uppercase">Register</h2>
            <div className="form-label-group my-3">
              <label for="inputFirstName" className="mb-1 pl-2">First Name</label>
              <input type="email" id="inputFirstName" className="form-control" placeholder="First Name" />
            </div>
            <div className="form-label-group my-3">
              <label for="inputLastName" className="mb-1 pl-2">Last Name</label>
              <input type="email" id="inputLastName" className="form-control" placeholder="Last Name" />
            </div>
            <div className="form-label-group my-3">
              <label for="inputEmail" className="mb-1 pl-2">Email</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-label-group my-3">
              <label for="inputPassword" className="mb-1 pl-2">Email</label>
              <input type="email" id="inputPassword" className="form-control" placeholder="Password" />
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