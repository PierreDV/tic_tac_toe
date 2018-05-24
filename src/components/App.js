import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      turn: "o",
      squares: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null
      }
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Board />
      </div>
    );
  }
}

export default App;