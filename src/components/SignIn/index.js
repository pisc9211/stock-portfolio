import React from 'react'

import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="container vh-100">
      <div className="row align-items-center h-100">
        <form className="col-12 col-md-6 offset-md-3 bg-white rounded shadow-lg">
          <div className="py-5 mb-3">
            <h2 className="text-center text-uppercase">Sign In</h2>
            <div className="form-label-group my-3">
              <label for="inputEmail" className="mb-1 pl-2">Email</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-label-group my-3">
              <label for="inputPassword" className="mb-1 pl-2">Email</label>
              <input type="email" id="inputPassword" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100 mt-5">Sign In</button>
            <Link to="/register" type="button" className="btn btn-primary d-block w-100 mt-3">Register</Link>
          </div> 
        </form>
      </div>
    </div>
  );
}

export default SignIn