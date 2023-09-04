import React from 'react';
import './ProfilePic.css';
import profilePic from '../../assets/profile_pic.jpg'; // Import the image

const ProfilePic: React.FC = () => {
  return (
    <div className="profile-pic">
      <img src={profilePic} alt="William Reckziegel" />
    </div>
  );
}

export default ProfilePic;
