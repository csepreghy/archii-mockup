import React, { Component } from 'react';
import Row from './Row';
import Divider from './Divider'

class CheckBoxList extends Component {

  constructor(props) {
    super();

  }



  render() {
    return (
      <div className="list-box checkbox">
        <div className="list-header">
          <div className="empty-cirlce">
          <input id="checkBox" type="checkbox" disabled="true" />
          </div>
        </div>
        <Row isCheckbox={ true } checkboxId="c1" checkBoxChange={ this.props.checkBoxChange } />
        <Divider color="grey" />
        <Row isCheckbox={ true } checkboxId="c2" checkBoxChange={ this.props.checkBoxChange } />
        <Divider color="grey" />
        <Row isCheckbox={ true } checkboxId="c3" checkBoxChange={ this.props.checkBoxChange } />
        <Divider color="grey" />
        <Row isCheckbox={ true } checkboxId="c4" checkBoxChange={ this.props.checkBoxChange } />
        <Divider color="grey" />
        <Row isCheckbox={ true } checkboxId="c5" checkBoxChange={ this.props.checkBoxChange } />
        <Divider color="grey" />
        <Row isCheckbox={ true } checkboxId="c6" checkBoxChange={ this.props.checkBoxChange } />
        <Divider color="grey" />
        <Row isCheckbox={ true } checkboxId="c7" checkBoxChange={ this.props.checkBoxChange } />
        <Divider color="grey" />
        <Row isCheckbox={ true } checkboxId="c8" checkBoxChange={ this.props.checkBoxChange } />
      </div>
    );
  }
}
export default CheckBoxList;