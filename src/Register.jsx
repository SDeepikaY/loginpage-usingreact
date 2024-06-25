import React, { useState } from 'react';

export const Register = (props) => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(''); 
  const [fullname,setfullname]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log()
  }

  return (
    <div className='auth-form-container'>
    <form onSubmit={{handleSubmit}}>
      <label htmlFor='email'>email</label>
      <input value={email} type='email' placeholder='enter email' id='email' name='email'/>
      <label htmlFor='password'>password</label>
      <input value={password} type='password' placeholder='set your password' id='password' name='password'/>
      <label htmlFor='fullname'>fullname</label>
      <input value={fullname} type='fullname' placeholder='enter your full name' id='fullname' name='fullname'/>
    </form>
    <button onClick={()=>props.onFormSwitch('login')}>Already have an account! Login here</button>
    </div>
  )
}
