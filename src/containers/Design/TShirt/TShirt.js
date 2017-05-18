import React from 'react';
import Header from 'components/Header/Header';
import DocumentTitle from 'react-document-title';
import {Row, Column} from 'react-foundation';
import {
  Image01,
  Image02,
  Image03,
  Image04,
  Image05,
  Image06,
  Image07,
  Image08,
  Image09,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14
} from './TShirt.style';
import {BodyText, PageTitle, SectionTitle} from 'shared/Text';
import {Container} from 'shared/container';
import Footer from 'components/footer/footer';

class TShirt extends React.Component {
  render() {
    return (
      <DocumentTitle title='Cheapstees Redesign'>
        <Container>
          <Header/>
            <PageTitle>E-commerce Website Redesign Project</PageTitle>
            <BodyText>In this project, I redesigned a website call
              <a href="http://www.cheapestees.com/"> cheapestees</a>. There are 5 phases in the project, which advance towards the final product of a set of design mock-ups (or "comps") for the website. I used the existing structure from the site, but design my own interface and layout with careful consideration of grid, type choice, visual hierarchy, and navigation system (clearly demonstrating where the user is in the site at any given time).
            </BodyText>
            <Image01/>
          <SectionTitle>Design Schedule</SectionTitle>
            <BodyText>
              <p>Phase 1: Wireframe Redesign</p>
              <p>Phase 2: Moodboards</p>
              <p>Phase 3: Mock-Up Roughs</p>
              <p>Phase 4: Mock-Up Refinements</p>
              <p>Phase 5: Mock-Up Final</p>
            </BodyText>
            <SectionTitle>Wireframes</SectionTitle>
            <BodyText>The original website has really bad layout and hierarchy in terms of web design. I think the creator never put any thoughts on web design, which gives me a great opportunity to redesign the site into a modern website. I made a lot of changes but I will bring 5 main changes to talk:
              <br/><br/>
              1. I create a primary level for the site, which helps to sort out the super long list options for the site's product. And I move the navigation bar to the top which helps people to see the bar.
              <br/><br/>
              2. I enlarge the product pictures which helps people to look at the details of the pictures.
              <br/><br/>
              3. Even in the Men's Short Sleeve T-Shirts page, The origin left side product options still displays all the product options, which I move out the options are not in the Men's category.
              <br/><br/>
              4. In the original site, the header section is so busy and does not meet any design principle(contrast), so I move brands logo to the footer section. (I created a footer for the page.)
              <br/><br/>
              5. I remove the right side promotion images because they are really not the focus of the body part, so I move them to the footer section and make the body part cleaner and organized.
            </BodyText>
            <Image02/>
            <SectionTitle>Moodboards</SectionTitle>
            <BodyText>
              I chose Baskerville fonts, Minion fonts, Gill Sans font and Roboto font for my mood boards. The first three can be found in Typekit and the last one can be downloaded from google font.
            </BodyText>
            <Row>
              <Column medium={12} small={12} large={6}><Image03/></Column>
              <Column medium={12} small={12} large={6}><Image04/></Column>
            </Row>
            <SectionTitle>Mock-Up Roughs</SectionTitle>
              <h3>Index Page Level</h3>
              <Row>
                <Column medium={6} small={6} large={3}><Image05/></Column>
                <Column medium={6} small={6} large={3}><Image06/></Column>
              </Row>
              <h3>Product Page Level</h3>
              <Row>
                <Column medium={6} small={6} large={3}><Image07/></Column>
                <Column medium={6} small={6} large={3}><Image08/></Column>
              </Row>
              <SectionTitle>Mock-Up Refinements</SectionTitle>
              <h3>Three Levels</h3>
              <BodyText>
                After the last critique from Denise, I toned down my design a lot. I removed some side banners and some color, I also removed and streamlined a lot of text information which improves the UX of the site. I added a light pink as the accent color through the whole site in order to bring some favor for the site. As for the home page, I used a few picture frames to represent different sections of the products. For the grid, I used 10-column layout.
              </BodyText>
              <Row>
                <Column medium={4} small={12} large={4}><Image09/></Column>
                <Column medium={4} small={12} large={4}><Image10/></Column>
                <Column medium={4} small={12} large={4}><Image11/></Column>
              </Row>
                <SectionTitle>Mock-Up Final</SectionTitle>
                <h3>Three Levels</h3>
                <BodyText>
                  I made some minor changes such as proximity issue and accent color apply, which are based on the feedback from the last module
                </BodyText>
              <Row>
                <Column medium={4} small={12} large={4}><Image12/></Column>
                <Column medium={4} small={12} large={4}><Image13/></Column>
                <Column medium={4} small={12} large={4}><Image14/></Column>
              </Row>
              <Footer />
          </Container>
      </DocumentTitle>
    );
  }
}

export default TShirt;
