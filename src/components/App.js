import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      turn: "O",
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

    this.placePiece = this.placePiece.bind(this);
  }

  placePiece(event, turn) {
    if (turn === "O") {
      this.setState({
        turn: "X",
        squares: this.state.squares.map((square, index) => {
          if (index === parseInt(event.target.id)) {
            return turn
          } else {
            return square
          }
        })
      });
    } else {
      this.setState({
        turn: "O",
        squares: this.state.squares.map((square, index) => {
          if (index === parseInt(event.target.id)) {
            return turn
          } else {
            return square
          }
        })
      });
    }
    event.target.innerHTML = turn;
  }

  render() {
    return (
      <div className="App">
        <Header turn={this.state.turn} />
        <Board 
          onPlacePiece={this.placePiece} 
          turn={this.state.turn}
          squares={this.state.squares} />
      </div>
    );
  }
}

export default App;