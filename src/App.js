import React, { Component } from 'react';
import Button from './components/Button/Button';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World!</h1>
        <Button />
      </div>
    );
  }
}

export default App;
