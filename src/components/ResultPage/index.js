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

export default function ResultPage({ results }) {
  const router = useRouter();

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
          <Text>Mandou bem, Lucas!</Text>
          <Title color={db.theme.colors.purpleText}>
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
          {results.map((result, index) => (
            <ul>
              <li key={result}>
                #
                {index + 1}
                {' '}
                resultado:
                {' '}
                {result === true ? 'acertou' : 'errou' }
              </li>
            </ul>
          ))}
        </Widget.Content>
      </Widget>
    </>
  );
}
