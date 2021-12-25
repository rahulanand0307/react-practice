import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';

class App extends Component {
  state = {
    userName: 'Rahul',
  };

  nameChangedHandler = (event) => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

export default App;
