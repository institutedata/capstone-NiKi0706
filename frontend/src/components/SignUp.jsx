import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './SignIn';
import Validation from './SignUpValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => { 


  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (e) => {
    setValues(prev =>({...prev, [e.target.name]: [e.target.value]}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    if(errors.firstName === "" && errors.lastName === "" && errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/api/user/create', values)
      .then(res => {
        navigate('/SignIn')
      })
      .catch(err => {
        console.log(err)
      })
  }
  }


  return ( 
    <div className="d-flex justify-content-center align-items-center vh-100 ">
    <div className="bg-light-gray p-3 rounded w-25 border-gray">
        <h2 style={{ fontSize: '50px', fontWeight: 'bold', color: 'gray'}}>Sign-Up</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName"className="text-light-gray"><strong>FirstName</strong></label>
          <input type="text" placeholder="Enter FirstName" name='firstName' onChange={handleInput}
           className='form-control rounded-0'/>
          {errors.firstName && <span className="text-danger"> {errors.firstName}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName"className="text-light-gray"><strong>LastName</strong></label>
          <input type="text" placeholder="Enter LastName" name='lastName' onChange={handleInput}
          className='form-control rounded-0'/>
          {errors.lastName && <span className="text-danger"> {errors.lastName}</span>}
        </div>
        <div className="mb-3">
        <label htmlFor="email" className="text-light-gray"><strong>Email</strong></label>
          <input type="email" placeholder="Enter Email" name='email' onChange={handleInput}
          className='form-control rounded-0'/>
          {errors.email && <span className="text-danger"> {errors.email}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="password"className="text-light-gray"><strong>Password</strong></label>
          <input type="password" placeholder="Enter Password" name='password' onChange={handleInput}
          className="form-control rounded-0" />
          {errors.password && <span className="text-danger"> {errors.password}</span>}
        </div>
        <button type='submit' className="btn btn-custom-gray w-100 rounded-0 bg-gray"style={{ fontSize: '30px', color: 'gray'}}><strong>Sign up</strong></button>
        <Link to='/SignIn' className="btn btn-default border w-100 bg-light rounded-0  text-light-gray" style={{ fontSize: '30px', fontWeight: 'bold', color: 'gray'}}>Login</Link>
      </form>
    </div>
  </div>
  )
}

export default SignUp
