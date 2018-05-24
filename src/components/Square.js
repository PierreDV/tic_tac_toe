import React from 'react';

const Square = (props) => {
  return (
    <div onClick={() => props.onPlacePiece(props.turn)} className="Square"></div>
  )
}

export default Square;