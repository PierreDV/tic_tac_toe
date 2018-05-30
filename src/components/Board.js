import React from 'react';
import Square from '../containers/Square';

const Board = () => {
  const squares = [];

  for (let i = 0; i < 9; i++) {
    squares.push(<Square key={i} position={i} />) 
  }

  return(
    <div className="Board">
      {squares}
    </div>
  );
}

export default Board;