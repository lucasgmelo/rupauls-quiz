/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

const Shimmer = keyframes`
    0% {
      background-position: -450px 0;
    }
    100% {
      background-position: 450px 0;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 150px;
    background-color: #9A9FAD;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      background-size: 650px 600px;
      position: absolute;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(to right, #9A9FAD 0%, #A8ADBD 20%, #9A9FAD 40%, #9A9FAD 100%);
      background-repeat: no-repeat;
       background-size: 450px 400px;
      animation: ${Shimmer} 1s linear infinite;
    }
`;

export const Title = styled.div`
    height: 20px;
    width: 100%;
    background-color: #9A9FAD;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    position: relative;
    &:before{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-image: linear-gradient(to right, #9A9FAD 0%, #A8ADBD 20%, #9A9FAD 40%, #9A9FAD 100%);
        background-repeat: no-repeat;
        background-size: 450px 400px;
        animation: ${Shimmer} 1s linear infinite;
    }
`;

export const Question = styled(Title)`
    height: 18px;
    width: 90%;
`;

export const Description = styled(Title)`
    height: 15px;
    width: 70%;

    margin-top: 15px;
`;

export const ButtonOne = styled(Title)`
    margin-top: 40px;
    height: 30px;
    border-radius: 20px;
    animation-delay: .2s;
`;

export const Button = styled(ButtonOne)`
    margin-top: 10px;
`;
