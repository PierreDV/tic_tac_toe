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

    this.placePiece = this.placePiece.bind(this);
  }

  placePiece(event, turn) {
    if (turn === "o") {
      this.setState({
        turn: "x",
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
        turn: "o",
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
        <Header />
        <Board 
          onPlacePiece={this.placePiece} 
          turn={this.state.turn}
          squares={this.state.squares} />
      </div>
    );
  }
}

export default App;