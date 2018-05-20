import React, { Component } from 'react';
import TooltipInfo from './TooltipInfo'

class Row  extends Component {

  constructor(props) {
    super();

    this.state = {
      infoTooltipDisplay: 'none',
      isChecked: false
    }

    this.renderPlus = this.renderPlus.bind(this);
  }

  renderPlus() {
    if (this.props.hasPlus) {
      return (
        <div>
          <span>{ this.props.text }</span>
          <span className="plus-btn" onClick={(e) => { this.handlePlusBtnClick(e) }}>+1</span>
        </div>
      );
    } else {
      return (
        <span>{ this.props.text }</span>
      );
    }
  }

  handleChange(e) {
    this.setState({
      isChecked: !this.state.isChecked
    });

    this.props.checkBoxChange(e.target);

    console.log('e', e.target.value);
    
  }

  renderCheckBox() {
    if (this.props.isCheckbox) {
      return (
        <input type="checkbox"
               id={ this.props.checkboxId }
               value={ this.state.isChecked }
               onChange={(e) => { this.handleChange(e) }}/>
      )
    } else {
      return;
    }
  }

  renderPending() {
    return (
      <button className="dropdown-btn">
        <img src="assets/pending.png" />
      </button>
    )
  }


  handlePlusBtnClick(e) {
    this.setState({ infoTooltipDisplay: 'block' })
  }

  render() {
    return (
      <div className="row">
        <TooltipInfo infoTooltipDisplay={ this.state.infoTooltipDisplay }
                     currentEmployees={ this.props.currentEmployees }
                     customers={ this.props.customers }
                     cprNumber={ this.props.cprNumber }/>
        { this.renderCheckBox() }
        { this.renderPlus() }

      </div>
    );
  }
}
export default Row;