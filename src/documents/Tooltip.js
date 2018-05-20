import React, { Component } from 'react';

class Tooltip extends Component {

  constructor(props) {
    super();

  }

  componentDidMount = () => {
    console.log('this.props.opacity', this.props.opacity);
    
  }
  

  render() {
    return (
      <div className="tooltip" style={{ 'display': this.props.display }}>
        <p>
          Archii considers a document a high GDPR risk if either a CPR number or a sensitve keywords found in it
        </p>
      </div>
    );
  }
}
export default Tooltip;