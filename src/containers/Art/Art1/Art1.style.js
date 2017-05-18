import React from 'react';
import styled from 'styled-components';

export const Sketch01 = styled.div `
  background: url('${require('assets/sketch1.jpeg')}') no-repeat;
  height: 400px;
  background-size: 100%;
  width: 300px;
  margin:auto;
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Sketch02 = styled(Sketch01)`
  background: url('${require('assets/sketch2.jpeg')}');
  background-size: 100%;
`
export const Sketch03 = styled(Sketch02)`
  background: url('${require('assets/sketch3.jpeg')}');
  background-size: 100%;
`
export const Sketch04 = styled(Sketch02)`
  background: url('${require('assets/sketch4.jpeg')}');
  background-size: 100%;
`
