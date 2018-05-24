import React, { Component } from 'react';
import _ from 'underscore';
import Header from './Header';
import Board from './Board';

const WINNING_COMBINATIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
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

  checkResult() {
    if (this.state.turn === "O") {
      this.collectIndexes(this.state.squares, "X");
    } else {
      this.collectIndexes(this.state.squares, "O");
    }
  }

  collectIndexes(arr, val) {
    let indexes = [], i;
    for(i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        indexes.push(i);
      }
    }
    WINNING_COMBINATIONS.forEach((combo) => {
      if(_.intersection(combo, indexes).length === combo.length) {
        console.log(`${val} has won!`);
      }
    });
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
    this.checkResult();
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