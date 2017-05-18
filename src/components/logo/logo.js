import React, { Component } from 'react';
import LogoSvg from 'assets/logo.svg';
import { LogoDiv, L} from './logo.style';
import ReactSVG from 'react-svg';


export default class Logo extends Component {

  render() {
    return (
        <LogoDiv>
          <a href="/#">
          <L />
          </a>
        </LogoDiv>
    );
  }
};
