import React, { Component } from 'react';
import Row from './Row';
import ListHeader from './ListHeader';
import Divider from './Divider'

class ListBox extends Component {

  constructor(props) {
    super();
    
  }

  render() {
    return (
      <div className="list-box keywords">
        <ListHeader />
        <Row text="CPR Number"/>
        <Divider />
        <Row text="CPR Number, “cancer”"/>
        <Divider />
        <Row text="“Depressive”"/>
        <Divider />
        <Row text="“Homosexual”"/>
        <Divider />
        <Row text="CPR Number, “Christanity”"/>
        <Divider />
        <Row text="“Sex”"/>
        <Divider />
        <Row text="CPR Number, “Debt”"/>
        <Divider />
        <Row text="CPR Number, Homosexual"/>
      </div>
    );
  }
}
export default ListBox;