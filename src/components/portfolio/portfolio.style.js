import styled from 'styled-components';

export const DesignOne = styled.div`
  background: url('${require('assets/portfolio/design_01.jpg')}') no-repeat;
  height:75vw;
  max-height: 900px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-size: 100%;
  margin-bottom: 4vh;
  &:hover {
    box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8);
  }
`;

export const Text = styled.h3`
  padding-top: 65%;
  padding-left: 5%;
`

export const DesignTwo = styled(DesignOne)`
  background: url('${require('assets/portfolio/design_02.jpg')}') no-repeat;
  background-size: 100%;
`;

export const DesignThree = styled(DesignOne)`
  background: url('${require('assets/portfolio/design_03.jpg')}') no-repeat;
  background-size: 100%;
`;
