import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Title.css';

const Title = (props) => {

  return (
    <div className={styles.titleBar}>
      <span className={styles.title}>Chore Wars</span>
      <button className={styles.signIn} type="button">Sign In</button>
    </div>
  )
}

export default Title;
