import React, { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import {Box} from 'shared/Box';
import DocumentTitle from 'react-document-title';
import {Container} from 'shared/container';

export default class Code extends Component {

  render() {
    return (
      <DocumentTitle title='Code'>
        <Container>
          <Header />
          <Box>
            <h3>I love programming because it really turns great ideas into reality.
              I have a strong computer science background with a few years web development
              experience. <br />
              If you want to see my code, please check my Github page.
            </h3>
          </Box>
        </Container>
      </DocumentTitle>
    )
  }
}
