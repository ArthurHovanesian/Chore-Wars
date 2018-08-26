import React from 'react';
import ReactDOM from 'react-dom';
import styles from './SignIn.css';

const SignIn = ({ toggleSignIn }) => {

  return (
    <div className={styles.SignIn}>
      <div className={styles.EnterHouseName}>Enter House Name</div>
      <div className={styles.inputField}>
        <input type="text"/>
        <button type="button" onClick={() => toggleSignIn()}>Go</button>
      </div>
    </div>
  )
}

export default SignIn
