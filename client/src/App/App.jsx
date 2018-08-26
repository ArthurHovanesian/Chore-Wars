import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from '../SignIn/SignIn.jsx';
import Roommates from '../Roommates/Roommates.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.toggleRoomie = this.toggleRoomie.bind(this);
    this.state = {
      renderSignIn: true,
      displayRoomie: null,
      choreInfo: {
        name: 'AirCnB HQ',
        roommates: [
          {name: 'Diane',
           points: 36
          },
          {name: 'Edward',
           points: -628
          },
          {name: 'Arthur',
           points: 592
          },
          {name: 'Duss',
           points: 7
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
      displayRoomie: roomie.name
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
              {this.state.displayRoomie}
            </div>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
