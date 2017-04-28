import React, { Component } from 'react';
import './App.css';

import LabelSelect from './containers/LabelSelect.js'

class LabelSelectContainer extends Component {
  render() {
    return (
        <LabelSelect
            data={this.props.data}
        />
    );
  }
}

export default LabelSelectContainer;
