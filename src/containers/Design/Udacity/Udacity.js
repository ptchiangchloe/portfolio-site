import React from 'react';
import Header from 'components/Header/Header';
import DocumentTitle from 'react-document-title';
import {Container} from 'shared/container';
import {BodyText, PageTitle, SectionTitle} from 'shared/Text';
import {
  Image01,
  Image02,
  Image03,
  Image04
} from './Udacity.style';

class Udacity extends React.Component {
  render() {
    return (
      <DocumentTitle title='Udacity Blitz'>
        <Container>
          <Header/>
        <PageTitle>Udacity Blitz Front-End Development</PageTitle>
        <BodyText>
          I was honnored to work with a very promising and respectful company called
          <a href="https://www.udacity.com/" alt="udacity"> Udacity</a>,
          which is an uprising online tech education platform that offer an A-level education
          to people all over the world with reasonale expense. I was an Front-End Developer for
          its new business platform called <a href="https://blitz.com/" alt="udacity"> Udacity Blitz</a>.
        </BodyText>
        <Image01 />
      <Image02 />
    <Image03 />
  <Image04 />
        </Container>
      </DocumentTitle>
    );
  }
}

export default Udacity;
