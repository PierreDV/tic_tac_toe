import React from 'react';

const Square = (props) => {
  return (
    <div onClick={(event) => props.onPlacePiece(event, props.turn)} className="Square"></div>
  )
}

export default Square;