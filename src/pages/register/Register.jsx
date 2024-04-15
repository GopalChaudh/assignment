import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'
export default function Register() {
  return (
    <div className='create-container'>
      <h2 className='hadding'>Create your PopX account</h2>
      <form action="/" className='create-form'>

<fieldset>
    <legend>Full Name <span className='red'>*</span></legend>
<input type="text" className='email' placeholder='Marry Deo'/>
</fieldset>

<fieldset>
    <legend>Phone Number <span className='red'>*</span></legend>
<input type="text" className='email' placeholder='Marry Deo'/>
</fieldset>

<fieldset>
    <legend>Email Address <span className='red'>*</span></legend>
<input type="text" className='email' placeholder='Marry Deo'/>
</fieldset>
<fieldset>
    <legend>Password <span className='red'>*</span></legend>
<input type="text" className='email' placeholder='Marry Deo'/>
</fieldset>
<fieldset>
    <legend>Company name <span className='red'>*</span></legend>
<input type="text" className='email' placeholder='Marry Deo'/>
</fieldset>
<div className='radio-cont'>
  <h5>Are you an Agency? <span className="red">*</span></h5>
  <input type="radio" name="agen" id='yes' /><span>Yes</span>
  <input type="radio" name="agen" id='no' /> <span>No</span>
</div>

<Link to="/profile">
<button className='create-btn'>Create Account</button>
</Link>
</form>
    </div>
  )
}
