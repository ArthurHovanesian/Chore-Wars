import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from '../SignIn/SignIn.jsx';
import Roommates from '../Roommates/Roommates.jsx';
import Profile from '../Profile/Profile.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.toggleRoomie = this.toggleRoomie.bind(this);
    this.removeChore = this.removeChore.bind(this);
    this.state = {
      renderSignIn: true,
      displayRoomie: null,
      choreInfo: {
        name: 'AirCnB HQ',
        roommates: [
          {name: 'Diane',
           points: 36,
           chores: ['Clean dishes','Sweep living room','Kill rats']
          },
          {name: 'Edward',
           points: -628,
           chores: ['Scrub toilet with toothbrush','Clean out gutter','Clear out garage','Mow lawn','Take out garbage','Call plumber']
          },
          {name: 'Arthur',
           points: 592,
           chores: ['Dust living room','Mop kitchen floor','Clean oven']
          },
          {name: 'Duss',
           points: 7,
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
  }

  render() {
    const renderSignIn = this.state.renderSignIn;
    const choreInfo = this.state.choreInfo;
    return (
      <div>
        {renderSignIn ? (
          <SignIn toggleSignIn={this.toggleSignIn}/>
        ) : (
          <div>
            <div>
              {choreInfo.roommates.map(roomie => <Roommates roomie={roomie} toggleRoomie={this.toggleRoomie}/>)}
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
