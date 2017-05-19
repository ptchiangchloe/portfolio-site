import React, { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import {Sketch, HoverScreen} from './Art.style';
import Logo from 'components/logo/logo';
import Nav from 'components/nav/nav';
import {Box} from 'shared/Box';
import Footer from 'components/footer/footer';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

export default class Art extends Component {
  render() {
    return (
      <DocumentTitle title='Art'>
        <div>
          <Header />
          <Box>
            <Sketch><HoverScreen className="title"><Link to={"/art/01"}>Pencil Sketch</Link></HoverScreen></Sketch>
          </Box>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}
