import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Profile.css';

const Profile = ({ roomie }) => {

  return (
    <div>
      <div>
        {roomie.name}
      </div>
      <div>
        {roomie.points}
      </div>
    </div>
  )
}

export default Profile
