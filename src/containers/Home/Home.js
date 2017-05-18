import React, { Component } from 'react';
import Nav from 'components/nav/nav';
import {MyName} from 'containers/Home/Home.style';

export default class Home extends Component {
  render() {
    return (
      <div>
        <MyName>
           HÀNYǓ JIANG
        </MyName>
        <Nav primary={false}>
          {this.props.children}
        </Nav>
      </div>
    );
  }
}
