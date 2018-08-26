import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Roommates.css';

const Roommates = ({ roomie, toggleRoomie }) => {

  return (
    <div className={styles.roomie} onClick={() => toggleRoomie(roomie)}>
      <div>{roomie.name}</div>
    </div>
  )
}

export default Roommates
