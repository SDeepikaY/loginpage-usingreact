import React, { useState } from 'react';



export const Login = () => {                      /*rafce- to create initial basic component */
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');  
  
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(email);

  }
  
           
  return (
    <>
      <form onSubmit={{handleSubmit}}>
        <label for='email' >email</label>
        <input value={email} type='email' placeholder='enter your email' id='email' name='email'/>
        <label for ='password'>password</label>
        <input value={password} type='password' placeholder='enter your password' id='password' name='password'/>
        <button type='submit'>login</button>
      </form>
      <button>Dont have have an account? Register here</button>
    </>
      
  )
}

export default Login
