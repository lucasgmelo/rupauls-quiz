/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import db from '../../../db.json';
import Widget from '../widget';
import {
  Title,
  Text,
  Detail,
} from '../MainStyles';

export default function QuestionWidget({ question, totalQuestions, questionIndex }) {
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
            Pergunta
            {' '}
            {questionIndex + 1}
            {' '}
            de
            {' '}
            {totalQuestions}
          </Title>
        </Widget.Header>
        <Image
          src={question.image}
          alt="Rupaul em uma foto com várias vencedoras do reality."
          width="100%"
          height="150px"
          objectFit="cover"
        />
        <Widget.Content>
          <Text>{question.title}</Text>
          <Detail>{question.description}</Detail>
          {question.alternatives.map((option) => (
            <Widget.Select key={option}>{option}</Widget.Select>
          ))}
          <Widget.Button type="submit" upper="uppercase" letter="0.1rem" color={db.theme.colors.purpleText} bg={db.theme.colors.btn}>
            confirmar
          </Widget.Button>
        </Widget.Content>
      </Widget>
    </>
  );
}
