import styled from 'styled-components';

export const Image01 = styled.div`
  width: 80%;
  height: 50vw;
  margin: auto;
  background: url('${require('assets/portfolio/TShirt/before_after.jpg')}') no-repeat;
  background-size: 100%;
  margin-bottom: 3vh;
  margin-top: -6vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Image02 = styled.div`
  width: 80%;
  height: 45vw;
  margin: auto;
  background: url('${require('assets/portfolio/TShirt/wireframe.jpg')}') no-repeat;
  background-size: 100%;
  margin-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Image03 = styled.div`
  height: 35vw;
  min-height: 300px;
  background: url('${require('assets/portfolio/TShirt/moodboardA.jpg')}') no-repeat;
  background-size: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Image04 = styled(Image03)`
  background: url('${require('assets/portfolio/TShirt/moodboardB.jpg')}') no-repeat;
  background-size: 100%;
`;

export const Image05 = styled.div`
  height: 40vw;
  max-height: 260px;
  background: url('${require('assets/portfolio/TShirt/roughA1.jpg')}') no-repeat;
  background-size: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Image06 = styled(Image05)`
  background: url('${require('assets/portfolio/TShirt/roughB1.jpg')}') no-repeat;
  background-size: 100%;
`;

export const Image07 = styled(Image05)`
  background: url('${require('assets/portfolio/TShirt/roughA2.jpg')}') no-repeat;
  background-size: 100%;
`;

export const Image08 = styled(Image05)`
  background: url('${require('assets/portfolio/TShirt/roughB2.jpg')}') no-repeat;
  background-size: 100%;
`;

export const Image09 = styled(Image03)`
  height: 50vh;
  background: url('${require('assets/portfolio/TShirt/refined1.jpg')}') no-repeat;
  background-size: 100%;
`;

export const Image10 = styled(Image09)`
  background: url('${require('assets/portfolio/TShirt/refined2.jpg')}') no-repeat;
  background-size: 100%;
`;

export const Image11 = styled(Image09)`
  background: url('${require('assets/portfolio/TShirt/refined3.jpg')}') no-repeat;
  background-size: 100%;
`;

export const Image12 = styled(Image09)`
  background: url('${require('assets/portfolio/TShirt/final1.jpg')}') no-repeat;
  background-size: 100%;
`;

export const Image13 = styled(Image09)`
  background: url('${require('assets/portfolio/TShirt/final2.jpg')}') no-repeat;
  background-size: 100%;
`;

export const Image14 = styled(Image09)`
  background: url('${require('assets/portfolio/TShirt/final3.jpg')}') no-repeat;
  background-size: 100%;
`;
