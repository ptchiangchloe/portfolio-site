import styled from 'styled-components';

export const Introduction = styled.div`
  font-size: 20px;
  width: 80%;
  margin: auto;
  
`;

export const SelfieImage = styled.div`
  display: block;
  height: 60vw;
  max-height: 780px
  background: url('${require('assets/selfie.jpg')}') no-repeat;
  background-size: 100%;
`;

export const Hello = styled.h1 `
  color: black;
`;

export const Section = styled.div `
  height: 1700px;
`;
