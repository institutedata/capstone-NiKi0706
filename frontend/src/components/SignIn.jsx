
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignIn = () => { 


  const [values, setValues] = useState({
    email: '',
    password: '',
    firstName: '',
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (e) => {
    setValues(prev =>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = Validation(values);
    setErrors(validationErrors);
    // console.log("Validation errors:", errors); // Log current errors state
    // If there are no errors, submit the form
    if (Object.values(validationErrors).every(error => error === "")) {
      axios.get('http://localhost:8081/api/user/', values)  //this is the api endpoint in my backend
        .then(res => {
          // console.log('API Response:', res.data);
          // if (res.data && res.data.length > 0) { // Check if any records are found
            navigate("/")
            alert('Welcome to FitFlash Women !'); // Show alert if login is successful
        })// Redirect to home page
        //   } else {
        //     alert('No records found'); // Show alert if no records are found
        //   }
        // })
        .catch(err => {
          console.error('Error fetching data:', err);
          alert('An error occurred. Please try again.'); // Show alert for any errors
        });
  }
  }

  return ( 

    <div className="d-flex justify-content-center align-items-center vh-100 ">
    <div className="bg-light-gray p-3 rounded w-25 border-gray">
        <h2 style={{ fontSize: '50px', fontWeight: 'bold', color: 'gray'}}>Sign In</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="email" className="text-light-gray"><strong>Email</strong></label>
          <input type="email" id="emailInput" placeholder="Enter Email" name='email' onChange={handleInput}
          autoComplete='email'
          className='form-control rounded-0'/>
          {errors.email && <span className="text-danger"> {errors.email}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="password"className="text-light-gray"><strong>Password</strong></label>
          <input type="password" id="passwordInput" placeholder="Enter Password" name='password' onChange={handleInput}
          className="form-control rounded-0" />
          {errors.password && <span className="text-danger"> {errors.password}</span>}
        </div>
        <button type='submit' className="btn btn-custom-gray w-100  rounded-0 text-decoration-none" style={{ fontSize: '30px',  color: 'gray'}}><strong>Login</strong></button>         <p></p>
     <Link to='/SignUp' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" style={{ fontSize: '30px',  color: 'gray'}}>Create Acccount</Link>
      </form>
    </div>
  </div>
  )
}

export default SignIn;









// // import React from "react"
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import {Link} from 'react-router-dom';
// // import Validation from "./LoginValidation";



// // const SignIn = () => {
// //   const [value, setValue] = useState({
// //   email: '',
// //   pasword: ''
// // })

// // const [errors, setErrors] = useState({})
// // const handleInput=(event) => {
// //   setValue(prev => ({...prev, [event.target.name]: event.target.value}))
  
// // }

// // const handleSubmit=(event) => {
// // event.preventDefault();
// // setErrors(Validation(value))
// // }



// //   return (
// //     <div className="d-flex justify-content-center align-items-center vh-100">
// //       <div className="bg-white p-3 rounded w-25">
// //         <h2>SignIn</h2>
// //         <form action="" onSubmit={handleSubmit}>
// //           <div className="mb-3">
// //             <label htmlFor="email"><strong>Email</strong></label>
// //             <input type="email" placeholder="Enter Email" name='email'
// //             onChange={handleInput} className='form-control rounded-0'/>
// //             {errors.email && <span className="text-danger"> {errors.email}</span>}
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="password"><strong>Password</strong></label>
// //             <input type="password" placeholder="Enter Password" name='password'
// //             onChange={handleInput} className="form-control rounded-0" />
// //             {errors.password && <span className="text-danger"> {errors.password}</span>}
// //           </div>
// //           <button type='submit' className="btn btn-success w-100 rounded-0 bg-gray"><strong>Log in</strong></button>
// //       <p></p>
// //           <Link to='/SignUp' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Acccount</Link>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }



// import React, { useState } from 'react'
// import Validation from './LoginValidation'
// import Container from '@mui/material/Container';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// // const PasswordErrorMessage = () => { 
// //   return ( 
// //     <p className="FieldError">Password should have at least 8 characters</p> 
// //   ); 
// //  }; 
  
//  function SignIn() { 
//   const [email, setEmail] = useState(""); 
//   const [password, setPassword] = useState({ 
//     value: "", 
//     isTouched: false, 
//   }); 
 
 
//   // const getIsFormValid = () => { 
//   //   return ( 
//   //     firstName && 
//   //     validateEmail(email) && 
//   //     password.value.length >= 8 && 
//   //     role !== "role" 
//   //   ); 
//   // }; 
  
//   // const clearForm = () => { 
//   //   setFirstName(""); 
//   //   setLastName(""); 
//   //   setEmail(""); 
//   //   setPassword({ 
//   //     value: "", 
//   //     isTouched: false, 
//   //   }); 
//   // }; 

//   const navigate = useNavigate();
  
//   const [values, setValues] = useState({
//     email: '',
//     password: ''
//   })

//   const [errors, setErrors] = useState({})
//   const handleInput=(event) => {
//     setValues(prev => ({...prev, [event.target.name]: event.target.value}))
//   }

//   const handleSubmit = (e) => { 
//     e.preventDefault(); 
//     alert("Account created!"); 
//     setErrors(Validation(values))
//     if(errors.email === "" && errors.password === "") {
//       axios.post('http://localhost:8081/api/user', values)
//       .then(res => {
//        if(res.data === 'success') {
//          navigate('/Home')
//        } else {
//           alert('no record exists')
//        }
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
//   }; 
  
//   return ( 
//     <Container sx={{
//       lg: 12, sm: 8, md: 10,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh',
//       color: 'grey',
//       fontstyle: 'bold',
//       position: 'absolute',
//       textalign: 'center',
//       bottom:'90px',
//       left:  '20%',  
//       top: '5%',
//       alignContent: 'center',
//       font: '40px "Montserrat", sans-serif, serif',
     
    
//     }}>
//     <div className="SigIn"> 
//       <form onSubmit={handleSubmit}> 
//         <fieldset> 
//           <h2>Sign In</h2> 
//           {/* <div className="Field"> 
//             <label> 
//               First name <sup>*</sup> 
//             </label> 
//             <input 
//               value={firstName} 
//               onChange={(e) => { 
//                 setFirstName(e.target.value); 
//               }} 
//               placeholder="First name" 
//             /> 
//           </div> 
//           <div className="Field"> 
//             <label>Last name</label> 
//             <input 
//               value={lastName} 
//               onChange={(e) => { 
//                 setLastName(e.target.value); 
//               }} 
//               placeholder="Last name" 
//             /> 
//           </div>  */}
//           <div className="Field"> 
//             <label> 
//               Email address <sup>*</sup> 
//             </label> 
//             <input 
//               value={email} 
//               onChange={(e) => { 
//                 setEmail(e.target.value); 
//               }} 
//               placeholder="" 
//             /> 
//           </div> 
//           <div className="Field"> 
//             <label> 
//               Password <sup>*</sup> 
//             </label> 
//             <input 
//               value={password.value} 
//               type="password" 
//               onChange={(e) => { 
//                 setPassword({ ...password, value: e.target.value }); 
//               }} 
//               onBlur={() => { 
//                 setPassword({ ...password, isTouched: true }); 
//               }} 
//               placeholder="" 
//             /> 
//             {password.isTouched && password.value.length < 8 ? ( 
//               <PasswordErrorMessage /> 
//             ) : null} 
//           </div> 
//           <button className="btn btn-custom-gray w-100  rounded-0 text-decoration-none "><strong>Sign up</strong></button>
//           <p></p>
//           <Link to='/SignUp' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Acccount</Link>
//         </fieldset> 
//       </form> 
//     </div> 
//     </Container>
//   ); 
//  } 




// export default SignIn








