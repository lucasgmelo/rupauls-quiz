import styled from 'styled-components';
import db from '../../db.json';

export const Page = styled.div`
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(142.62deg, #CE9FFC -43.31%, #7367F0 129.93%);
  position: relative;
  z-index: 1;
`;

export const Stars = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${db.bg});
  background-size: cover;
  position: absolute;
  z-index: -1;
`;

export const Man = styled.div`
  height: 40vh;
  width: 30vh;
  background-image: url(${db.men});
  background-size: cover;
  position: absolute; 
  bottom: 0px;
  left: 10px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    opacity: 0;
  }
`;

export const Logo = styled.div`
  width: 330px;
  height: 140px;
  max-width: 500px;
  max-height: 230px;
  background-image: url(${db.logo});
  background-size: cover;
  right: 0;
  z-index: 1;
  transition: all .5s ease;
  @media screen and (min-width: 950px) {
    position: absolute;
    width: 37vw;
    height: 23vh;
    top: 160px;
  }
  @media screen and (min-width: 1050px) {
    position: absolute;
    width: 45vw;
    height: 30vh;
    top: 150px;
  }
  @media screen and (min-width: 1150px) {
    position: absolute;
    width: 45vw;
    height: 50vh;
    top: 150px;
  }
  @media screen and (min-width: 1200px) {
    position: absolute;
    right: 10%;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 600;
`;

export const Subtitle = styled.h2`
    color: ${(props) => props.color};
    font-weight: 600;
    font-size: 18px;
`;

export const Text = styled.h3`
  color: ${(props) => props.color || 'black'};
  font-weight: 400;
  font-size: 16px;
  margin-top: 0;
`;

export const Detail = styled.p`
    margin-top: 0;
    color: ${(props) => props.color || 'black'};
    font-size: 14px;
    font-weight: 400;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  margin-left: 200px;
  @media screen and (max-width: 768px) {
    margin: auto;
    padding: 15px;
  }
`;

export const Form = styled.form`
  max-width: 350px;
`;

export const Success = styled.div`
  width: 34px;
  height: 34px;

  border-radius: 50%;

  position: relative;

  margin-top: 20px;

  justify-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(90.97deg, #8BDE7D 0%, #7DD48B 143.73%);

  &:after {
    content:'';
    width: 46px;
    height: 46px;

    border-radius: 50%;

    position: absolute;

    background: linear-gradient(90.97deg, rgba(139, 222, 125, 0.5) 0%, rgba(125, 212, 139, 0.5) 143.73%);

  }
`;

export const Error = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;

  margin-top: 20px;

  justify-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  border: 4px solid #F67171;
`;
