import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Chore.css';

const Chore = ({ roomie, chore, removeChore }) => {

  return (
    <div>
      <span>{chore}</span>
      <button type="button" onClick={() => removeChore(roomie, chore)}>Done</button>
      <button type="button">Attack</button>
    </div>
  )
}

export default Chore
