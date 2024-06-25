import React, { useState } from 'react';



export const Login = (props) => {                      /*rafce- to create initial basic component */
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');  
  
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(email);

  }
  
           
  return (
    <div className='auth-form-container'>
      <form onSubmit={{handleSubmit}}>
        <label htmlFor='email' >email</label>
        <input value={email} type='email' placeholder='enter your email' id='email' name='email'/>
        <label htmlFor ='password'>password</label>
        <input value={password} type='password' placeholder='enter your password' id='password' name='password'/>
        <button type='submit'>login</button>
      </form>
      <button onClick={()=>props.onFormSwitch('register')}>Dont have have an account? Register here</button>
    </div>
      
  )
}

export default Login
