import React, { Component } from 'react';
import Tooltip from './Tooltip'

class ListHeader extends Component {

  constructor(props) {
    super();

    this.state = {
      tooltipDisplay: 'none'
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter() {
    this.setState({ tooltipDisplay: 'block' });
  }

  handleMouseLeave() {
    this.setState({ tooltipDisplay: 'none' });
  }

  render() {
    return (
      <div className="list-header">
        <div className="title-container" >
          <span>High risk keywords</span>
          <Tooltip display={ this.state.tooltipDisplay }/>
          <button className="info-btn"
                  onMouseEnter={() => { this.handleMouseEnter() }}
                  onMouseLeave={() => { this.handleMouseLeave() }}>
            <span>i</span>
          </button>
        </div>
        <button className="dropdown-btn">
          <img src="assets/down-arrow.png" />
        </button>
      </div>
    );
  }
}
export default ListHeader;