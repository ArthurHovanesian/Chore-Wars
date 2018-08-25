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
      </div>
    </div>
  )
}

export default SignIn;
