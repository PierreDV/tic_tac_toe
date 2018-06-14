import React, { Component } from 'react';
import Square from '../components/Square';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { placeMarker } from '../actions/index';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="Board">
        {Object.keys(this.props.board).map(i => {
          return(
            <Square 
              key={this.props.board[i].magicInt} 
              marker={this.props.board[i].marker}
              playerTurn={this.props.playerTurn}
              onPlaceMarker={this.props.placeMarker}
              position={i}
            />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    playerTurn: state.playerTurn
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({placeMarker: placeMarker}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);