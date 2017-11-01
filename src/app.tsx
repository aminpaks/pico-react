import * as React from 'react';
import { connect } from 'react-redux';
import Pico from './pico/pico';
import './app.css';

const logo = require('./logo.svg');

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pico, a simple photo search</h2>
        </div>
        <Pico />
      </div>
    );
  }
}

export default App;
