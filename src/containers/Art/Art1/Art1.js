import React, {Component} from 'react';
import Header from 'components/Header/Header';
import {BodyText} from 'shared/Text';
import {Sketch01, Sketch02, Sketch03, Sketch04} from './Art1.style';
import {Row, Column, ButtonGroup, Link, Thumbnail} from 'react-foundation';
import {Box} from 'shared/Box';
import Footer from 'components/footer/footer';
import DocumentTitle from 'react-document-title';

export default class Art1 extends Component {
  render() {
    return (
      <DocumentTitle title='Portrait Sketch'>
        <div>
          <Header/>
          <Box>
            <Row upOnSmall={1} upOnMedium={2} upOnLarge={4}>
              <Sketch01/>
              <Sketch02/>
              <Sketch03/>
              <Sketch04/>
            </Row>
            <Row className="display">
              <BodyText>
                I found lots of similarity between creating a portrait sketch and writing a program. First of all, they both are very creative craftsmanship. They both take the time to master the skill. They both need a lot of patience and creativity. The process of both have sort of planning and architecting.
                <br/><br/>
                I had a systematic and rigorious fine art education since I was 10 year old. So visual design becomes a very important aspect in my skill set. As a visual designer, I pay a lot of attention on user interface, brand strategy, style guides, color theory and palettes, typography, iconography and acessibilty.
              </BodyText>
            </Row>
          </Box>
          <Footer />
        </div>
      </DocumentTitle>

    );
  }
}
