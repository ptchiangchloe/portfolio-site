import React from 'react';
import {DesignOne, DesignTwo, DesignThree, Text} from './portfolio.style';
import {Box} from 'shared/Box';
import {Row, Column} from 'react-foundation';
import { Link } from 'react-router';

class Portfolio extends React.Component {

  render() {
    return (
      <Box>
        <Row className="display">
          <Column small={12} large={12}><Link to="/design/01"><DesignOne><Text>My Dementia Team Web Application
            <br />UI/UX Design, Front-End Development</Text></DesignOne></Link></Column>
          <Column small={12} large={12}><Link to="/design/02"><DesignTwo><Text>Udacity Blitz
            <br />Front-End Development</Text></DesignTwo></Link></Column>
          <Column small={12} large={12}><Link to="/design/03"><DesignThree><Text>Redesign CheapsTees.com
          <br />User Interface Design</Text></DesignThree></Link></Column>
        </Row>
      </Box>
    );
  }

}

export default Portfolio;
