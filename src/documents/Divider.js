import React, { Component } from 'react';

class Divider extends Component {

  constructor(props) {
    super();

  }

  renderDivider() {
    if (this.props.color === 'grey') {
      return (
        <div className="divider grey"></div>
      );
    } else if (this.props.color === 'white') {
      return (
        <div className="divider white"></div>
      )
    }
  }
 
  render() {
    return (
      <div>
        { this.renderDivider() }
      </div>
    );
  }
}
export default Divider;