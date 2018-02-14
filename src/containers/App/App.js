import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {Row, Column, ButtonGroup, Link, Colors} from 'react-foundation';
import {MyName} from 'containers/Home/Home.style';
import DocumentTitle from 'react-document-title';

class App extends Component {
  render() {
    return (
      <DocumentTitle title='HÀNYǓ'>
          {this.props.children}
        </div>
     </DocumentTitle>


    );
  }
}

export default App;
