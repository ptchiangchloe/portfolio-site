import styled from 'styled-components';

export const Item = styled.li`
    list-style-type: none;
    padding: 14px 0;
    float: right;
`;

export const Text = styled.h4`
  font-size: ${ props => props.primary ? '3vw' : '18vw'};
  font-weight:bold;
    &:hover {
      color: red;
    }
`;

export const Link = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  &:hover {
    text-decoration: none;
  }
`;
