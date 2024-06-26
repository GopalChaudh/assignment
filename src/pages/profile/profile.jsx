import React from 'react';
import './Profile.css'; 

export default function Profile() {
  const defaultProfileImage = '/assignment/profile.png'; 

  return (
    <div className='profile-container'>
      <h3 className='profile-top'>Account Settings</h3>
      <div className="profile">
        <img
          src="/profile.png"
          onError={(event) => {
            event.currentTarget.src = defaultProfileImage; 
          }}
          alt="Profile Picture" 
        />
        <div>
          <h3>Marry Doe</h3>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}
