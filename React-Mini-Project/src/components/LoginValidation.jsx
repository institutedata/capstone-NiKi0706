// function Validation(values){
//     let error = {}
//     const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const password_pattern = /^( ?=.* \d)( ?=.* [a-z]) ( ?=.* [A-Z]) [a-zA-Z0-9]{8, }$/
    
//     if(values.email === "") {
//     error.email = "Name should not be empty"
//     }
//     else if(!email_pattern.test(values.email)) {
//     error.email = "Email Didn't match"
//     }else {
//     error.email
    
//     }
    
    
//     if(values.password === "") {
//     error.password = "Password should not be empty"
//     }
//     else if(!password_pattern.test(values.password)) {
//     error. password = "Password didn't match"
//     } else {
//     error. password = ""
//     }
    
//     return error;

// }

// export default Validation;
function Validation(values) {
  let error = {}
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  // if (values.firstName === "") {
  //     error.firstName = "Name should not be empty"
  
  // } else {
  //     error.firstName = ""
  // }

  // if (values.lasttName === "") {
  //     error.lastName = "Name should not be empty"
  
  // } else {
  //     error.lastName = ""
  // }

  if (values.email === "") {
      error.email = "Email should not be empty"
  } else if (!email_pattern.test(values.email)) {
      error.email = "Email didn't match"
  } else {
      error.email = ""
  }

  if (values.password === "") {
      error.password = "Password should not be empty"
  } else if (!password_pattern.test(values.password)) {
      error.password = "Password didn't match"
  } else {
      error.password = ""
  }

  return error;
}

export default Validation;






// export const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };

//   const clearForm = () => { 
//     setFirstName(""); 
//     setLastName(""); 
//     setEmail(""); 
//     setPassword({ 
//       value: "", 
//       isTouched: false, 
//     }); 
//     setRole("role"); 
//    }; 

//    export default validateEmail