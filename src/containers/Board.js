import React, { Component } from 'react';
import Square from '../components/Square';

class Board extends Component {
  render() {
    return(
      <div className="Board">
        <Square />
      </div>
    );
  }
}

export default Board;