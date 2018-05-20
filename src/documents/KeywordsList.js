import React, { Component } from 'react';
import Row from './Row';
import ListHeader from './ListHeader';
import Divider from './Divider'

class KeywordsList extends Component {

  constructor(props) {
    super();
    
  }

  render() {
    return (
      <div className="list-box keywords">
        <ListHeader hasInfoButton={ this.props.hasInfoButton }
                    columnTitle={ this.props.columnTitle }/>
        <Row text="CPR Number"/>
        <Divider color="grey" />
        <Row text="CPR Number, “cancer”"/>
        <Divider color="grey" />
        <Row text="“Depressive”"/>
        <Divider color="grey" />
        <Row text="“Homosexual”"/>
        <Divider color="grey" />
        <Row text="CPR Number, “Christanity”"/>
        <Divider color="grey" />
        <Row text="“Sex”"/>
        <Divider color="grey" />
        <Row text="CPR Number, “Debt”"/>
        <Divider color="grey" />
        <Row text="CPR Number, Homosexual"/>
      </div>
    );
  }
}
export default KeywordsList;