import React from 'react';
import ReactDOM from 'react-dom';
import styles from './NewRoomie.css';

const NewRoomie = ({ addNewRoomie }) => {

  var roomie;

  var newRoomie = (item) => {
    roomie = item
  }

  return (
    <div>
      <input className={"newRoomie"} type="text" placeholder="Add new roomie" onChange={(e) => newRoomie(e.target.value)}/>
      <button onClick={() => addNewRoomie(roomie)}>New Roomie</button>
    </div>
  )
}

export default NewRoomie
