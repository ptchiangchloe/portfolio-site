import React, {Component} from 'react';
import {SelfieImage, Introduction} from './me.style';
import {Row, Column, ButtonGroup, Link, Colors} from 'react-foundation';
import {BodyText} from 'shared/Text';
import {Box} from 'shared/Box';

var styles = {
  base: {
    color: '#fff',
    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      backgroundColor: '#0074d9'
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  },

  intro: {
    fontSize: '15px',
    ':hover': {
      backgroundColor: '#0074d9'
    }
  }
};

export default class Me extends Component {

  render() {
    return (
      <Box>
        <Row className="display">
          <Column small={12} large={12}><SelfieImage/></Column>
        </Row>
        <Row className="display">
          <Introduction>
            <BodyText>
              Hi, My name is Hanyu. I’m a UI/UX designer and Software Engineer
              based in San Francisco currently.
              <br/><br/>Making beautiful design is like making an beautiful art
              piece. Creating amazing user experience is like creating an amazing
              story. I enjoy both of them in order to building great produt that
              help users achieve their daily goals.
            </BodyText>
          </Introduction>
        </Row>
      </Box>
    )
  }
}
