import React from 'react';
import DocumentTitle from 'react-document-title';
import {Container} from 'shared/container';
import Header from 'components/Header/Header';
import {BodyText, PageTitle, SectionTitle, SubTitle} from 'shared/Text';
import {
  Image01,
  Image02,
  Image03,
  Image04,
  Image05,
  Image06
} from './FindMe.style';
import SlideShow from 'components/slideshow/slideshow';
import Footer from 'components/footer/footer';

class FindMe extends React.Component {

  render() {
    return (
      <DocumentTitle title='Find Me'>
        <Container>
          <Header/>
          <PageTitle>My Dementia Team</PageTitle>
          <BodyText>MyDementiaTeam is a social network website that help people build dementia friendly communities, gain practical advice and insights on being a carepartner for a person with dementia.
          </BodyText>
          <Image01/>
          <SectionTitle>Design Overview</SectionTitle>
          <BodyText>The layout is simple but effective, there is a white background and a consistent colour theme (DarkOrchid) that matches the logo which looks professional and does not distract from the content.</BodyText>
          <Image02/>
          <BodyText>The homepage UX design has got inpiration from Facebook which has a big focus on New Feed. This purpose of this is to let users focus on the news in the community they are in, which is the biggest serive we provide.ON the right side of the home page, there are official contents from different resources.
          </BodyText>
          <Image03/>
          <BodyText>The team page is the place that you can find people according to the person's name identity or the person's location. The page uses information cards to present each person's information including picture, name, location with 'SAY HI' and 'ADD TO TEAM' functions.</BodyText>
          <Image04/>
          <BodyText>My page is the place that you can see all your personal information and activities. It's the best place for users to manage their data.
          </BodyText>
          <SectionTitle>Design Process</SectionTitle>
          <SubTitle>New Member Onboarding Process</SubTitle>
        <SlideShow />
        <Footer />
        </Container>
      </DocumentTitle>

    );
  }
}

export default FindMe;
