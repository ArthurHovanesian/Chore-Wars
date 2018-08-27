import React from 'react';
import ReactDOM from 'react-dom';
import styles from './RemainingChoresItem.css';

const RemainingChoresItem = ({ chore }) => {

  return (
    <div>
      <span>{chore}</span>
      <button type="button">Remove</button>
    </div>
  )
}

export default RemainingChoresItem
