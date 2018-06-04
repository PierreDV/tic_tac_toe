import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placePiece, checkResult } from '../actions/index';
import { bindActionCreators } from 'redux';

class Square extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div 
        className="Square"
        onClick={() => { this.props.placePiece(this.props.position, this.props.playerTurn) }}
      >
        {this.props.marker}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    marker: state.board[ownProps.position].marker,
    playerTurn: state.playerTurn,
    board: state.board
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ placePiece: placePiece }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);