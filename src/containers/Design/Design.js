import React, { Component } from 'react';
import Header from 'components/Header/Header';
import Portfolio from 'components/portfolio/portfolio';
import DocumentTitle from 'react-document-title';
import {Container} from 'shared/container';

export default class Design extends Component {
  render() {
    return (
      <DocumentTitle title='Design'>
        <Container>
          <Header />
          <Portfolio />
        </Container>
      </DocumentTitle>
    )
  }
}
