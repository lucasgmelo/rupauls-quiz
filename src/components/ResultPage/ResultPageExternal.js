/* eslint-disable no-unreachable */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import { Image } from '@chakra-ui/react';
import styled from 'styled-components';
import Widget from '../widget';
import {
  Title,
  Text,
} from '../MainStyles';
import db from '../../../db.json';

export default function ResultPage({ results, other }) {
  const router = useRouter();

  Widget.External = styled.button`

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  box-shadow: ${(props) => (props.disabled ? `${db.theme.shadowDisabled}` : `${db.theme.shadow}`)};
 
  width: 100%;
  height: 30px;

  margin: 15px 0 0 0;

  border-radius: 4px;
  border: none;

  text-transform: ${(props) => props.upper || 'none'};
  letter-spacing: ${(props) => props.letter || 'none'};

  color: ${(props) => props.color || 'white'};

  background: ${(props) => props.bg};

  transition: all .3s ease;
  outline: none;

  &:hover {
    transform: ${(props) => (props.disabled ? '' : 'translateY(-1px)')};
    background: ${(props) => props.bgHover};
  }

  &:active {
    transform: translateY(0px);
    opacity: 0.9;
  }

`;

  return (
    <>
      <Widget
        border={other.theme.colors.primary}
      >
        <Widget.Header
          bg={other.theme.colors.primary}
        >
          <Image
            src="/Back.png"
            alt="Voltar"
            mr="10px"
            cursor="pointer"
            onClick={(event) => {
              event.preventDefault();
              router.push('/');
            }}
          />
          <Title>
            Resultado
          </Title>
        </Widget.Header>
        <Widget.Content>
          <Text>
            Arrasou,
            {' '}
            {router.query.name}
            !
          </Text>
          <Title color={other.theme.colors.primary}>
            Você acertou
            {' '}
            {results.reduce((somatoriaAtual, resultAtual) => {
              const isWright = resultAtual === true;
              if (isWright) {
                return somatoriaAtual + 1;
              }
              return somatoriaAtual;
            }, 0)}
            {' '}
            questões, parabéns!
          </Title>
          <Widget.External
            upper="uppercase"
            letter="0.05rem"
            color={other.theme.colors.contrastText}
            bg={other.theme.colors.primary}
            bgHover={other.theme.colors.secondary}
            onClick={(event) => {
              event.preventDefault();
              router.push('/');
            }}
          >
            Voltar ao início
          </Widget.External>
        </Widget.Content>
      </Widget>
    </>
  );
}
