import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './SignIn';

const SignUp = () => { 
  return ( 
    <div className="d-flex justify-content-center align-items-center vh-100 ">
    <div className="bg-light-gray p-3 rounded w-25 border-gray">
        <h2>Sign-Up</h2>
      <form action="">
        <div className="mb-3">
          <label htmlFor="firstName"className="text-light-gray"><strong>FirstName</strong></label>
          <input type="text" placeholder="Enter FirstName" className='form-control rounded-0'/>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName"className="text-light-gray"><strong>LastName</strong></label>
          <input type="text" placeholder="Enter LastName" className='form-control rounded-0'/>
        </div>
        <div className="mb-3">
        <label htmlFor="email" className="text-light-gray"><strong>Email</strong></label>
          <input type="email" placeholder="Enter Email" className='form-control rounded-0'/>
        </div>
        <div className="mb-3">
          <label htmlFor="password"className="text-light-gray"><strong>Password</strong></label>
          <input type="password" placeholder="Enter Password" className="form-control rounded-0" />
        </div>
        <button className="btn btn-custom-gray w-100 rounded-0 bg-gray"><strong>Sign up</strong></button>
    <p></p>
        <Link to='/SignIn' className="btn btn-default border w-100 bg-light rounded-0  text-light-gray">Login</Link>
      </form>
    </div>
  </div>
  )
}

export default SignUp
