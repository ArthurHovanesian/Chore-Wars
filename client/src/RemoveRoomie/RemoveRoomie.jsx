import React from 'react';
import ReactDOM from 'react-dom';
import styles from './RemoveRoomie.css';

const RemoveRoomie = ({ roomies, removeRoomie }) => {

  return (
    <div>
      Remove Roomie
      <select onChange={(e) => removeRoomie(e.target.value)}>
        <option></option>
        {roomies.map(roomie => <option>{roomie.name}</option>)}
      </select>
    </div>
  )
}

export default RemoveRoomie
