import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../Title/Title.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <Title />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));