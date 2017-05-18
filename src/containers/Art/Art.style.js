import styled from 'styled-components';

export const Sketch = styled.div`
  background: url('${require('assets/sketch4.jpeg')}') no-repeat;
  height: 400px;
  background-size: 100%;
  width: 300px;
  margin:auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    > .title {
      display: inline-block;
    }
  }
`;

export const HoverScreen = styled.div`
  width: 300px;
  height: 100px;
  background-color: grey;
  opacity: 0.5;
  font-size: 19px;
  color: white;
  font-weight: bold;
  text-align: center;
  padding-top: 10%;
  display: none;
`
