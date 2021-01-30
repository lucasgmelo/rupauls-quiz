/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import { Image } from '@chakra-ui/react';
import Widget from '../widget';
import {
  Title,
  Text,
} from '../MainStyles';
import db from '../../../db.json';
import { Line } from './styles';

export default function ResultPage({ results }) {
  const router = useRouter();
  let number;

  function message(value) {
    if (value <= 1) return <Text>Af, não assiste rupaul mesmo ne? Se quiser ver, comece pela 9ª temporada</Text>;
    if (value >= 2 && value < 5) return <Text>É gataaa, ta sabendo um pouco né? Mereceu o Shantay you stay.</Text>;
    if (value > 4 && value < 7) return <Text>É ELAAAA, WERK QUEEN, AVISA QUE É SHANTAY YOU STAY!!</Text>;
    if (value === 7) return <Text>SHOOT!! CONDRAGULATIONS YOU ARE THE WINNER OF THIS QUIZ CHALLENGE! NOW PRANCE MY QUEEN</Text>;
  }

  return (
    <>
      <Widget>
        <Widget.Header>
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
          <Title color={db.theme.colors.purpleText}>
            Você acertou
            {' '}
            {results.reduce((somatoriaAtual, resultAtual) => {
              const isWright = resultAtual === true;
              if (isWright) {
                return somatoriaAtual + 1;
              }
              number = 7;
              return somatoriaAtual;
            }, 0)}
            {' '}
            questões, parabéns!
          </Title>
          {message(number)}
          <Widget.Button
            upper="uppercase"
            letter="0.05rem"
            color={db.theme.colors.purpleText}
            bg={db.theme.colors.btn}
            onClick={(event) => {
              event.preventDefault();
              router.push('/');
            }}
          >
            Voltar ao início
          </Widget.Button>
        </Widget.Content>
      </Widget>
    </>
  );
}
