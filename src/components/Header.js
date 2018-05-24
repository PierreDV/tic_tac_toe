import React from 'react';

const Header = (props) => {
  let message;

  if(props.result === null) {
    message = `It is ${props.turn}'s turn.`;
  } else {
    message = props.result;
  }
  return (
    <h1 className="Header">{message}</h1>
  );
}

export default Header;