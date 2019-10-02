import React from 'react'
import axios from 'axios'

const Buy = ({ user }) => {
  console.log(user)
  return (
    <form className="align-items-center mt-5">
      <h4 className="text-center text-uppercase">Cash: ${user ? user.balance : null}</h4>
      <div className="form-label-group my-3">
        <label htmlFor="stock" className="mb-1 pl-2">
          Stock
        </label>
        <input
          type="stock"
          id="stock"
          className="form-control"
          placeholder="stock"
        />
      </div>
      <div className="form-label-group my-3">
        <label htmlFor="quantity" className="mb-1 pl-2">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className="form-control"
          placeholder="quantity"
        />
      </div>
      <button className="btn btn-primary w-100">Buy Stock!</button>
    </form>
  );
}

export default Buy