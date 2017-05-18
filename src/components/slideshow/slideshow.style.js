import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    position: relative;
    margin:auto;
`;

export const Slide = styled.div`
    margin: auto;
    width: 80%;
    height: 40vw;
    max-height: 450px;
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Controls = styled.div`
    display: inline;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
`;

export const Arrow = styled.div`
    font-size: 50px;
    margin: 0 5px;
`;
