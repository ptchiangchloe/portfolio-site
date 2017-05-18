import React from 'react';
import {addons} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Container, Slide, Controls, Arrow} from './slideshow.style';


const image01 = require('assets/onboarding/onboarding-page-001.jpg');
const image02 = require('assets/onboarding/onboarding-page-002.jpg');
const image03 = require('assets/onboarding/onboarding-page-003.jpg');
const image04 = require('assets/onboarding/onboarding-page-004.jpg');
const image05 = require('assets/onboarding/onboarding-page-005.jpg');
const image06 = require('assets/onboarding/onboarding-page-006.jpg');
const image07 = require('assets/onboarding/onboarding-page-007.jpg');
const image08 = require('assets/onboarding/onboarding-page-008.jpg');
const image09 = require('assets/onboarding/onboarding-page-009.jpg');
const image10 = require('assets/onboarding/onboarding-page-010.jpg');
const image11 = require('assets/onboarding/onboarding-page-011.jpg');

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.SlideData = [
      {
        id: "slide01",
        url: image01
      }, {
        id: "slide02",
        url: image02
      }, {
        id: "slide03",
        url: image03
      }, {
        id: "slide04",
        url: image04
      }, {
        id: "slide05",
        url: image05
      }, {
        id: "slide06",
        url: image06
      }, {
        id: "slide07",
        url: image07
      }, {
        id: "slide08",
        url: image08
      }, {
        id: "slide09",
        url: image09
      }, {
        id: "slide10",
        url: image10
      }, {
        id: "slide11",
        url: image11
      }
    ]
    this.state = {
      currentSlide :0
    }
  }

  prevSlide(){
    let newSlide = this.state.currentSlide;
    if (this.state.currentSlide > 0){
      newSlide = newSlide - 1;
    }
    this.setState({currentSlide: newSlide});
  }

  nextSlide(){
    let newSlide = this.state.currentSlide;
    if(this.state.currentSlide < this.SlideData.length - 1) {
      newSlide = newSlide + 1;
    }
    this.setState({currentSlide: newSlide});
  }

  componentWillMount(){
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  handleKeyDown(e){
    if (e.keyCode === 37){
      this.prevSlide();
    }else if (e.keyCode === 39){
      this.nextSlide();
    }
  }

  render() {
    return (
      <Container className="slideshow-container">
        <SlideDisplay data={this.SlideData} currentSlide={this.state.currentSlide} />
      <Controls>
        <PrevButton slideshow={this} />
        <NextButton slideshow={this} />
      </Controls>

      </Container>
    );
  }

}

export default SlideShow;

class SlideDisplay extends React.Component {

  render() {
    let slide = this.props.data[this.props.currentSlide];
    return (
        <Slide style={{
                         backgroundImage: 'url(' + slide.url + ') ' ,
        }}/>
    );
  }
}


class PrevButton extends React.Component {
  render() {
    let disabled = false;
    if(this.props.slideshow.state.currentSlide <= 0){
      disabled = true;
    }
    return (
      <button disabled={disabled}
              className="prev"
              onClick = {this.handleClick.bind(this)}>
              <Arrow style={{

              }}>{disabled?
                String.fromCharCode(8602) :
                String.fromCharCode(8612)}</Arrow>
      </button>
    );
  }

  handleClick(e) {
    this.props.slideshow.prevSlide();
  }
}

class NextButton extends React.Component {
  render() {
    let disabled = false;
    if(this.props.slideshow.state.currentSlide >= this.props.slideshow.SlideData.length - 1){
      disabled = true;
    }
    return (
      <button disabled={disabled}
              className="next"
              onClick = {this.handleClick.bind(this)}
              >
              <Arrow style={{

                           }}>{disabled?
                String.fromCharCode(8603) :
                String.fromCharCode(8614)}</Arrow>
      </button>
    );
  }

  handleClick(e) {
    this.props.slideshow.nextSlide();
  }
}
