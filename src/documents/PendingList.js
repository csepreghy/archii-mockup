import React, { Component } from 'react';
import Row from './Row';
import Divider from './Divider'

class PendingList extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="list-box pending">
        <div className="list-header">
          <button className="dropdown-btn">
            <img src="assets/down-arrow.png" />
          </button>
        </div>
        <Row isPendingRow={ true } willBePending={ this.props.willBePending }/>
        <Divider color="grey" />
        <Row isPendingRow={ true } willBePending={ this.props.willBePending }/>
        <Divider color="grey" />
        <Row isPendingRow={ true } willBePending={ this.props.willBePending }/>
        <Divider color="grey" />
        <Row isPendingRow={ true } willBePending={ this.props.willBePending }/>
        <Divider color="grey" />
        <Row isPendingRow={ true } willBePending={ this.props.willBePending }/>
        <Divider color="grey" />
        <Row isPendingRow={ true } willBePending={ this.props.willBePending }/>
        <Divider color="grey" />
        <Row isPendingRow={ true } willBePending={ this.props.willBePending }/>
        <Divider color="grey" />
        <Row isPendingRow={ true } willBePending={ this.props.willBePending }/>
      </div>
    );
  }
}
export default PendingList;