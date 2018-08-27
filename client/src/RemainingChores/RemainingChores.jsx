import React from 'react';
import ReactDOM from 'react-dom';
import RemainingChoresItem from '../RemainingChoresItem/RemainingChoresItem.jsx'
import styles from './RemainingChores.css';

const RemainingChores = ({ choreInfo, addChore }) => {

  var chore;

  var newChore = (item) => {
    chore = item
  }

  return (
    <div>
      <div>Remaining Chores</div>
      {choreInfo.remainingChores.map(chore => <RemainingChoresItem chore={chore}/>)}
      <input type="text" placeholder="Add new chore" onChange={(e) => newChore(e.target.value)}/>
      <button onClick={() => addChore(chore)}>Add</button>
      <button>Assign All</button>
    </div>
  )
}

export default RemainingChores
