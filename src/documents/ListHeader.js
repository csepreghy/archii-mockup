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

  renderHeader() {
    if (this.props.hasInfoButton) {
      return (
        <div>
          <span>{ this.props.columnTitle }</span>
          <Tooltip display={ this.state.tooltipDisplay }/>
          <button className="info-btn"
                  onMouseEnter={() => { this.handleMouseEnter() }}
                  onMouseLeave={() => { this.handleMouseLeave() }}>
            <span>i</span>
          </button>
        </div>
      )
    } else {
      return (
        <span>{ this.props.columnTitle }</span>
      )
    }
  }

  render() {
    return (
      <div className="list-header">
        <div className="title-container" >
          { this.renderHeader() }
        </div>
        <button className="dropdown-btn">
          <img src="assets/down-arrow.png" />
        </button>
      </div>
    );
  }
}
export default ListHeader;