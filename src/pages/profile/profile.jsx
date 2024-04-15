import React from 'react'
import './Profile.css'
export default function Profile() {
  return (
    <div className='profie-container'>
   <h3 className='profile-top'>Account Settings</h3>
   <div className="profile">
    <img src="/profile.png" alt="" />
    <div>
      <h3>Marry Doe</h3>
      <p>Marry@Gmail.Com</p>
      </div>
   </div>
   <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
    </div>
  )
}
