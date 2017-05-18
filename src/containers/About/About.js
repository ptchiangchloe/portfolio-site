import React, { Component } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/footer/footer';
import Me from 'components/me/me';
import DocumentTitle from 'react-document-title';

export default class About extends Component {

  render() {
    return (
      <DocumentTitle title='About Me'>
      <div>
        <Header />
        <Me/>
        <Footer />
      </div>
      </DocumentTitle>
    );
  }
}
