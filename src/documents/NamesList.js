import React, { Component } from 'react';
import Row from './Row';
import ListHeader from './ListHeader';
import Divider from './Divider'

class NamesList extends Component {

  constructor(props) {
    super();
    
  }

  render() {
    return (
      <div className="list-box names">
        <ListHeader hasInfoButton={ false }
                    columnTitle={ this.props.columnTitle }/>
        <Row text="Søren Jespersen"/>
        <Divider color="grey" />
        <Row text="-"/>
        <Divider color="grey" />
        <Row text="Peter"/>
        <Divider color="grey" />
        <Row text="Sune"/>
        <Divider color="grey" />
        <Row text="Lars, Ulrik, Svend"/>
        <Divider color="grey" />
        <Row text="Jens Jul"/>
        <Divider color="grey" />
        <Row text="Sune, Lars"/>
        <Divider color="grey" />
        <Row text="Claus Kaspersen"/>
      </div>
    );
  }
}
export default NamesList;