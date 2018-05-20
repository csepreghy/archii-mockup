import React, { Component } from 'react';
import ListBox from './ListBox';

class HighRiskDocuments extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="high-risk-documents">
        <div className="documents-header">
          <h1>High risk documents</h1>
          <div className="buttons-container">
            <button>
              <img src="assets/send-icon.png" />
            </button>
            <button>
              <img src="assets/download-icon.png" />
            </button>
          </div>
        </div>
        <div className="list-container">
          <ListBox />
        </div>
      </div>
    );
  }
}
export default HighRiskDocuments;