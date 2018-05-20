import React, { Component } from 'react';
import Row from './Row';
import ListHeader from './ListHeader';
import Divider from './Divider'

class PersonsList extends Component {

  constructor(props) {
    super();
    
  }

  render() {
    return (
      <div className="list-box persons">
        <ListHeader hasInfoButton={ this.props.hasInfoButton }
                    columnTitle={ this.props.columnTitle }/>
        <Row text="CPR Number, Employee" hasPlus={ true } 
             currentEmployees="Andrew"/>
        <Divider color="grey" />
        <Row text="CPR Number"/>
        <Divider color="grey" />
        <Row text="Employee"/>
        <Divider color="grey" />
        <Row text="Employee"/>
        <Divider color="grey" />
        <Row text="CPR Number, Customer"/>
        <Divider color="grey" />
        <Row text="Other"/>
        <Divider color="grey" />
        <Row text="Employee, Customer" 
             hasPlus={ true } 
             currentEmployees="Ulrik"
             customers="Jens"
             cprNumber="Lars (020202‐0101) 010101‐0202"/>
        <Divider color="grey" />
        <Row text="CPR number, Other"/>
      </div>
    );
  }
}
export default PersonsList;