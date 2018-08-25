import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from '../SignIn/SignIn.jsx';
import styles from './Title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.state = {
      toggleSignIn: false,
    };
  }

  toggleSignIn() {
    this.setState({
      toggleSignIn: !this.state.toggleSignIn
    })
  }

  render() {
    return (
      <div className={styles.titleBar}>
        <span className={styles.title}>Chore Wars</span>
        <button className={styles.signIn} type="button" onClick={() => this.toggleSignIn()}>Sign In</button>
        {this.state.toggleSignIn &&
          <SignIn toggleSignIn={this.toggleSignIn}/>
        }
      </div>
    )
  }
}

export default Title;
