import React, { Component } from 'react';

const Square = (props) => {
  return(
    <div 
      className="Square"
      onClick={() => {props.onPlaceMarker(props.playerTurn, props.position)}}
    >
      {props.marker}
    </div>
  );
}

export default Square;