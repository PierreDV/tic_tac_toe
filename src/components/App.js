import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      turn: "o",
      squares: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Board squares={this.state.squares} />
      </div>
    );
  }
}

export default App;