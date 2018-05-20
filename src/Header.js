import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="header">
        <img className="logo" src="https://archii.ai/wp-content/uploads/2018/03/archii-white-light.svg" />
      </div>
    );
  }
}
export default Header;