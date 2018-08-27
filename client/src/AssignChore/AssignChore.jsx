import React from 'react';
import ReactDOM from 'react-dom';
import styles from './AssignChore.css';

const AssignChore = ({ addChore, chosenForChore }) => {

  var chore;

  var newChore = (item) => {
    chore = item
  }

  return (
    <div>
      <input className={"submit"} type="text" placeholder="Add new chore" onChange={(e) => newChore(e.target.value)}/>
      <button onClick={() => addChore(chore)}>Assign Randomly</button>
      <div>Assigned to {chosenForChore}</div>
    </div>
  )
}

export default AssignChore
