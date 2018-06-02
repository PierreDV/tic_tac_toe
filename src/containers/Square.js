import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placePiece } from '../actions/index';
import { bindActionCreators } from 'redux';

class Square extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div 
        className="Square"
        onClick={() => this.props.placePiece(this.props.position)}
      >{this.props.marker}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    marker: state.board[ownProps.position]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ placePiece: placePiece }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);