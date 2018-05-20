import React, { Component } from 'react';
import HighRiskDocuments from "./documents/HighRiskDocuments";

class Content extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="content">
        <p className="site-info">This is an overview of all documents where Archii has been able to locate either a name of a person or a CPR number.</p>
        <HighRiskDocuments />
      </div>
    );
  }
}
export default Content;