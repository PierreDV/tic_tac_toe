import React from 'react';

const Header = (props) => {
  return (
    <h1 className="Header">{`It is ${props.turn}'s turn.`}</h1>
  );
}

export default Header;