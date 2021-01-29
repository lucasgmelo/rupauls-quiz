/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../../../db.json';
import Widget from '../widget';
import {
  Title,
  Text,
  Detail,
  Success,
  Error,
} from '../MainStyles';
import AlternativesForm from './styles';

export default function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit, addResult, other,
}) {
  const router = useRouter();
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  Widget.ButtonExternal = styled.button`

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

  background: ${(props) => props.theme.colors.primary};

  transition: all .3s ease;
  outline: none;

  &:hover {
    transform: ${(props) => (props.disabled ? '' : 'translateY(-1px)')};
    background: ${(props) => props.theme.colors.secondary};
  }

  &:active {
    transform: translateY(0px);
    opacity: 0.9;
  }

`;

  return (
    <>
      <Widget border={other.theme.colors.primary}>
        <Widget.Header bg={other.theme.colors.primary}>
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
          alt=""
          width="100%"
          height="180px"
          objectFit="cover"
        />
        <Widget.Content>
          <Text>{question.title}</Text>
          <Detail>{question.description}</Detail>
          <AlternativesForm
            bg={other.theme.colors.secondary}
            onSubmit={(e) => {
              e.preventDefault();
              setIsFormSubmited(true);
              setTimeout(() => {
                addResult(isCorrect);
                onSubmit();
                setIsFormSubmited(false);
                setSelectedAlternative(undefined);
              }, 3 * 1000);
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
              const isSelected = selectedAlternative === alternativeIndex;

              return (
                <Widget.Select
                  as="label"
                  htmlFor={alternativeId}
                  key={alternativeId}
                  data-selected={isSelected}
                  data-status={isFormSubmited && alternativeStatus}
                  bg={other.theme.colors.primary}
                  other={other}
                >
                  <input
                    style={{ display: 'none' }}
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
            <Widget.ButtonExternal type="submit" disabled={!hasAlternativeSelected} upper="uppercase" letter="0.1rem" color={db.theme.colors.contrastText} bg={db.theme.colors.primary}>
              confirmar
            </Widget.ButtonExternal>
            )}

            {isFormSubmited && isCorrect && <Success><img src="/ok.png" alt="Correto" /></Success> }
            {isFormSubmited && !isCorrect && <Error><img src="/no.png" alt="Errado" /></Error> }
          </AlternativesForm>
        </Widget.Content>
      </Widget>
    </>
  );
}
