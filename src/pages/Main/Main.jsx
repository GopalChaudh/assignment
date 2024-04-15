import React from 'react'
import './main.css';
import { Link } from 'react-router-dom';
export default function Main() {
  return (

    <div className='main-container'>
    <div className='content'>
    <h2 className='title'>
    Welcome to PopX
    </h2>
    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
    <Link to="/create">

    <button className='create'>Create Account</button>
    </Link>
    <Link to="/login">

    <button className='login'>Already Registered? Login</button>
    </Link>
    
    </div>
    </div>
  )
}
