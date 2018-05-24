import React from 'react';
import Square from './Square';

const Board = ({squares}) => {
  const grid = squares.map((square, index) => {
    return <Square key={index}/>
  });

  return (
    <div className="Board">
      {grid}
    </div>
  );
}

export default Board;