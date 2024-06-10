import React from 'react'
import { useStategit  } from 'react'

const Login = () => {         /*rafce*/
  return (

      <form>
        <label for='email' >email</label>
        <input type='email' placeholder='enter your email' id='email' name='email'/>
        <label for ='password'>password</label>
        <input type='password' placeholder='enter your password' id='password' name='password'/>
        <button>login</button>
      </form>
      
  )
}

export default Login
