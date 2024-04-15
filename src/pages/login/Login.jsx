import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
export default function Login() {
  return (
    <div className='login-container'>
        <h2 className='login-title'>Signin to your PopX account</h2>
        <p className='login-para '>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form action="/" className='login-form'>

        <fieldset>
            <legend>Email Address</legend>
        <input type="text" className='email' placeholder='Enter email address'/>
        </fieldset>
        <fieldset>
            <legend>Password</legend>
        <input type="text" className='pass' placeholder='Password'/>
        </fieldset>
        <Link to="/profile">
        <button className='login-btn'>Login</button>
        </Link>
    </form>
    </div>
  )
}
