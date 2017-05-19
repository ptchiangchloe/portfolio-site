import React, { Component } from 'react';
import LogoSvg from 'assets/logo.svg';
import { LogoDiv, L} from './logo.style';
import ReactSVG from 'react-svg';
import { Link } from 'react-router';

export default class Logo extends Component {

  render() {
    return (
        <LogoDiv>
          <Link to={"/"}>
          <L />
          </Link>
        </LogoDiv>
    );
  }
};
