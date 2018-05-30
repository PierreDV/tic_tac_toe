import React, { Component } from 'react';
import { connect } from 'react-redux';

class Square extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="Square">{this.props.marker}</div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    marker: state.board[ownProps.position]
  }
}

export default connect(mapStateToProps)(Square);