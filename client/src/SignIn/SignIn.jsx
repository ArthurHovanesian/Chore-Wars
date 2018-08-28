import React from 'react';
import ReactDOM from 'react-dom';
import styles from './SignIn.css';

const SignIn = ({ toggleSignIn, findRoom, addRoom }) => {

  var room;

  var find = (item) => {
    room = item
  }

  return (
    <div className={styles.SignIn}>
      <div className={styles.EnterHouseName}>Enter House Name</div>
      <div className={styles.inputField}>
        <div>
          <input type="text" onChange={(e) => find(e.target.value)}/>
          <button type="button" onClick={() => findRoom(room)}>Find</button>
        </div>
        <div>
          <input type="text" onChange={(e) => find(e.target.value)}/>
          <button type="button" onClick={() => addRoom(room)}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
