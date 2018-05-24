import React from 'react';

const Square = (props) => {
  return (
    <div id={props.id} onClick={(event) => props.onPlacePiece(event, props.turn)} className="Square"></div>
  )
}

export default Square;