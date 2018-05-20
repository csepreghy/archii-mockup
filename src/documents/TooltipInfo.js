import React, { Component } from 'react';
import Divider from './Divider'

class TooltipInfo extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div style={{ display: this.props.infoTooltipDisplay }}
           className="info-tooltip">
        <p className="info-key">Current Employees</p>
        <Divider color="white" />
        <p className="info-value">
          { this.props.currentEmployees }
        </p>
        <p className="info-key">Customers</p>
        <Divider color="white" />
        <p className="info-value">
          { this.props.customers }
        </p>
        <p className="info-key">CPR Number</p>
        <Divider color="white" />
        <p className="info-value">
          { this.props.cprNumber }
        </p>
      </div>
    );
  }
}
export default TooltipInfo;