import React from 'react';
import Square from './Square';

const Board = (props) => {
  const grid = props.squares.map((square, index) => {
    return (
      <Square 
        id={index}
        turn={props.turn}
        onPlacePiece={props.onPlacePiece}
        key={index}/>
    );
  });

  return (
    <div className="Board">
      {grid}
    </div>
  );
}

export default Board;