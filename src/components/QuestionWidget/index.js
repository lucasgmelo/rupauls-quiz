/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import db from '../../../db.json';
import Widget from '../widget';
import {
  Title,
  Text,
  Detail,
} from '../MainStyles';

export default function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit,
}) {
  const router = useRouter();
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

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
            {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsFormSubmited(true);
              setTimeout(() => {
                onSubmit();
                setIsFormSubmited(false);
                setSelectedAlternative(undefined);
              }, 3 * 1000);
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              return (
                <Widget.Select
                  as="label"
                  htmlFor={alternativeId}
                  key={alternativeId}
                >
                  <input
                    id={alternativeId}
                    name={questionId}
                    type="radio"
                    onChange={() => setSelectedAlternative(alternativeIndex)}
                  />
                  {alternative}
                </Widget.Select>
              );
            })}
            {!isFormSubmited && (
            <Widget.Button type="submit" disabled={!hasAlternativeSelected} upper="uppercase" letter="0.1rem" color={db.theme.colors.purpleText} bg={db.theme.colors.btn}>
              confirmar
            </Widget.Button>
            )}

            {isFormSubmited && isCorrect && <p>acertou</p> }
            {isFormSubmited && !isCorrect && <p>nao acertou</p> }
          </form>
        </Widget.Content>
      </Widget>
    </>
  );
}
