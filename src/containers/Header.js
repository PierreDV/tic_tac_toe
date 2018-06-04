import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <h1>{this.props.result}</h1>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.result
  }
}

export default connect(mapStateToProps)(Header);