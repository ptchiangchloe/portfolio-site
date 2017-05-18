import React, { Component } from 'react';
import Logo from 'components/logo/logo';
import Nav from 'components/nav/nav';
import {Row, Column, ButtonGroup, Link, Colors} from 'react-foundation';

class Header extends Component {
  render() {
    return (
        <Row className="display">
          <Column medium={2} large={1}><Logo /></Column>
          <Column medium={9} offsetOnMedium={1} large={9} offsetOnLarge={2}>
          <Nav primary={true}>{this.props.children}</Nav></Column>
        </Row>
    );
  }
}

export default Header;
