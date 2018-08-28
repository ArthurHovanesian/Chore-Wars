import React from 'react';
import ReactDOM from 'react-dom';
import Chore from '../Chore/Chore.jsx';
import styles from './Profile.css';

const Profile = ({ roomie, removeChore }) => {

  return (
    <div>
      <div>
        {roomie.name}
      </div>
      <div>
        {roomie.chores.map(chore => <Chore roomie={roomie} chore={chore} removeChore={removeChore}/>)}
      </div>
    </div>
  )
}

export default Profile
