import React, { Component } from 'react';
import { connect } from 'react-redux';
import Square from '../components/Square';

class Board extends Component {
  constructor(props) {
    super(props);
    console.log(props.squares);
  }
  
  render() {
    return (
      <div className="Board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    squares: state.squares
  };
}

export default connect(mapStateToProps)(Board);