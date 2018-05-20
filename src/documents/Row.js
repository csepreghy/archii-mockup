import React, { Component } from 'react';

class Row  extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="row">
        <span>{ this.props.text }</span>
      </div>
    );
  }
}
export default Row;