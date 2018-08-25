import React from 'react';
import ReactDOM from 'react-dom';
import styles from './SignIn.css';

const SignIn = ({ toggleSignIn }) => {
  const stopProp = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.outer} onClick={() => toggleSignIn()}>
      <div className={styles.inner} onClick={stopProp}>
        <div>
          <div>
            <input type="text" className={styles.userInput}/>
            <span>Username</span>
          </div>
          <div>
            <input type="text" className={styles.userInput}/>
              <span>Password</span>
          </div>
          <button type="button">Sign In</button>
          <div className={styles.notMember}> Not a member? Sign Up Below!</div>
          <div>
            <input type="text" className={styles.userInput}/>
            <span>Email</span>
          </div>
          <div>
            <input type="text" className={styles.userInput}/>
            <span>Username</span>
          </div>
          <div>
            <input type="text" className={styles.userInput}/>
              <span>Password</span>
          </div>
          <div>
            <input type="text" className={styles.userInput}/>
            <span>Retype Password</span>
          </div>
          <button type="button">Register</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
