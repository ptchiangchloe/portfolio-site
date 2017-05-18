import React from 'react';
import {DesignOne, DesignTwo, DesignThree, Text} from './portfolio.style';
import {Box} from 'shared/Box';
import {Row, Column} from 'react-foundation';

class Portfolio extends React.Component {

  render() {
    return (
      <Box>
        <Row className="display">
          <Column small={12} large={12}><a href="/#/design/01"><DesignOne><Text>My Dementia Team Web Application
            <br />UI/UX Design, Front-End Development</Text></DesignOne></a></Column>
          <Column small={12} large={12}><a href="/#/design/02"><DesignTwo><Text>Udacity Blitz
            <br />Front-End Development</Text></DesignTwo></a></Column>
          <Column small={12} large={12}><a href="/#/design/03"><DesignThree><Text>Redesign CheapsTees.com
          <br />User Interface Design</Text></DesignThree></a></Column>
        </Row>
      </Box>
    );
  }

}

export default Portfolio;
