import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SignIn from '../SignIn/SignIn.jsx';
import Roommates from '../Roommates/Roommates.jsx';
import AssignChore from '../AssignChore/AssignChore.jsx';
import Profile from '../Profile/Profile.jsx';
import NewRoomie from '../NewRoomie/NewRoomie.jsx';
import RemoveRoomie from '../RemoveRoomie/RemoveRoomie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.toggleRoomie = this.toggleRoomie.bind(this);
    this.removeChore = this.removeChore.bind(this);
    this.addChore = this.addChore.bind(this);
    this.addNewRoomie = this.addNewRoomie.bind(this);
    this.removeRoomie = this.removeRoomie.bind(this);
    this.findRoom = this.findRoom.bind(this);
    this.addRoom = this.addRoom.bind(this);
    this.state = {
      renderSignIn: true,
      displayRoomie: null,
      chosenForChore: '',
      choreInfo: {
        name: 'AirCnB HQ',
        remainingChores: ['Clean tub', 'Wash windows','Organize cabinets','Clean yard','Shovel snow','Buy cleaning supplies','Fire Edward'],
        roommates: [
          {name: 'Diane',
           chores: ['Clean dishes','Sweep living room','Kill rats']
          },
          {name: 'Edward',
           chores: ['Scrub toilet with toothbrush','Clean out gutter','Clear out garage','Mow lawn','Take out garbage','Call plumber']
          },
          {name: 'Arthur',
           chores: ['Dust living room','Mop kitchen floor','Clean oven']
          },
          {name: 'Duss',
           chores: ['Put dishes back','Tidy furniture','Wash Edward\'s underwear']
          }
        ]
      }
    }
  }

  toggleSignIn() {
    this.setState({
      renderSignIn: !this.state.renderSignIn
    })
  }

  toggleRoomie(roomie) {
    this.setState({
      displayRoomie: roomie
    })
  }

  removeChore(roomie, chore) {
    var copy = Object.assign({}, this.state.choreInfo)
    for (var i = 0; i < copy.roommates.length; i++) {
      if (copy.roommates[i] === roomie) {
        for (var j = 0; j < copy.roommates[i].chores.length; j++) {
          if (copy.roommates[i].chores[j] === chore) {
            copy.roommates[i].chores.splice(j, 1);
          }
        }
      }
    }
    this.setState({
      choreInfo: copy
    })
    axios.delete('/deleteChore', {params: copy})
  }

  addChore(chore) {
    var copy = Object.assign({}, this.state.choreInfo);
    var rand = Math.floor(Math.random() * copy.roommates.length);
    for (var i = 0; i < copy.roommates.length; i++) {
      if (copy.roommates[i].name === copy.roommates[rand].name) {
        copy.roommates[i].chores.push(chore)
      }
    }
    this.setState({
      choreInfo: copy,
      chosenForChore: copy.roommates[rand].name
    })
    document.getElementsByClassName("submit")[0].value = ''
    axios.put('/newChore', copy)
  }

  addNewRoomie(roomie) {
    var copy = Object.assign({}, this.state.choreInfo);
    copy.roommates.push({name: roomie, chores: []})
    delete copy['_id']
    for (var i = 0; i < copy.roommates.length; i++) {
      delete copy.roommates[i]['_id']
    }
    this.setState({
      choreInfo: copy
    })
    axios.put('/newRoomie', copy)
    document.getElementsByClassName("newRoomie")[0].value = ''
  }

  removeRoomie(roomie) {
    var copy = Object.assign({}, this.state.choreInfo);
    delete copy['_id']
    for (var i = 0; i < copy.roommates.length; i++) {
      delete copy.roommates[i]['_id']
    }
    for (var i = 0; i < copy.roommates.length; i++) {
      if (copy.roommates[i].name === roomie) {
        copy.roommates.splice(i, 1)
      }
    }
    this.setState({
      choreInfo: copy
    })
    axios.delete('/delete', {params: copy})

  }

  findRoom(room) {
    axios.get('/find', {
      params: {
        roomName: room
      }
    })
    .then(res => this.setState({choreInfo: res.data[0], renderSignIn: !this.state.renderSignIn}))
    .catch(err => console.log(err))
  }

  addRoom(room) {
    axios.post('/addRoom', {
      name: room
    })
    this.findRoom(room)
  }

  render() {
    const renderSignIn = this.state.renderSignIn;
    const choreInfo = this.state.choreInfo;
    return (
      <div>
        {renderSignIn ? (
          <SignIn toggleSignIn={this.toggleSignIn} findRoom={this.findRoom} addRoom={this.addRoom}/>
        ) : (
          <div>
            <div>
              {choreInfo.roommates.map(roomie => <Roommates roomie={roomie} toggleRoomie={this.toggleRoomie}/>)}
            </div>
            <div>
              <NewRoomie addNewRoomie={this.addNewRoomie}/>
            </div>
            <div>
              <RemoveRoomie roomies={this.state.choreInfo.roommates} removeRoomie={this.removeRoomie}/>
            </div>
            <div>
              <AssignChore addChore={this.addChore} chosenForChore={this.state.chosenForChore}/>
            </div>
            <div>
              {this.state.displayRoomie
                && <Profile roomie={this.state.displayRoomie} removeChore={this.removeChore}/>
              }
            </div>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
