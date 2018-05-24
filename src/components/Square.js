import React from 'react';

const Square = (props) => {
  return (
    <div onClick={(e) => {e.target.innerHTML = 'X'}} className="Square"></div>
  )
}

export default Square;