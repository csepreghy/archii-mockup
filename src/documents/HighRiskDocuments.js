import React, { Component } from 'react';
import KeywordsList from './KeywordsList';
import PersonsList from './PersonsList'
import NamesList from './NamesList';
import CheckBoxList from './CheckBoxList';
import PendingList from './PendingList';

class HighRiskDocuments extends Component {

  constructor(props) {
    super();

    this.state = {
      pendingItems: {
        'some-id-1': false
      }
    }
  }

  checkBoxChange(target) {
    console.log('target', target.value);
    // should have made each row one component. Then each row knows its own data and state
    // I'll stop now, this makes no sense to somehow force this to work.
  }

  render() {
    return (
      <div className="high-risk-documents">
        <div className="documents-header">
          <h1>High risk documents</h1>
          <div className="buttons-container">
            <button>
              <img src="assets/download-icon.png" />
            </button>
            <button>
              <img src="assets/send-icon.png" />
            </button>
          </div>
        </div>
        <div className="list-container">
          <KeywordsList hasInfoButton={ true }
                        columnTitle={ 'High Risk Keywords' }/>
          <div className="right-lists-container">
            <PersonsList columnTitle={ 'Persons' }/>
            <NamesList columnTitle={ 'Names' } />
            <CheckBoxList checkBoxChange={ this.checkBoxChange }/>
            <PendingList />
          </div>
        </div>
      </div>
    );
  }
}
export default HighRiskDocuments;