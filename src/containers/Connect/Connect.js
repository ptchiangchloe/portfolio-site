import React, {Component} from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import {BodyText} from 'shared/Text';
import {Row} from 'react-foundation';
import {Box} from 'shared/Box';
import DocumentTitle from 'react-document-title';

export default class Connect extends Component {
  render() {
    return (
      <DocumentTitle title='Contact'>
        <div>
          <Header/>
          <Box>
            <Row className="display">
              <BodyText>
                If you are interested in getting know me better, have or having an
                interesting project that my skill and experience can help you achieve.
                Please send me an Email at ptchiang12@gmail.com.
              </BodyText>
            </Row>
          </Box>
        </div>
      </DocumentTitle>
    )
  }
}
