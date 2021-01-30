/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import {
  Grid, GridItem, Image, Flex,
} from '@chakra-ui/react';
import GithubCorner from '../../components/GithubCorner';
import {
  Page,
  Stars,
  QuizContainer,
  Man,
} from '../../components/MainStyles';
import QuestionWidgetExternal from '../../components/QuestionWidget/QuestionWidgetExternal';
import useMedia from '../../../hooks/useMedia';
import LoadingPage from '../../components/LoadingPage';
import ResultPage from '../../components/ResultPage';

export default function QuizScreen({ dbExterno }) {
  const [screenState, setScreenState] = useState('LOADING');
  const [results, setResults] = useState([]);
  const totalQuestions = dbExterno.questions.length;
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = dbExterno.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
    setScreenState('LOADING');
  }

  useEffect(() => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion === totalQuestions) {
      setScreenState('RESULT');
    } else {
      setTimeout(() => {
        setScreenState('QUIZ');
      }, 1.5 * 1000);
    }
  }, [results]);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setcurrentQuestion(questionIndex + 1);
    } else {
      setScreenState('RESULT');
    }
  }

  return (
    <Page none="">
      <Stars bgImg={dbExterno.bg} />
      <QuizContainer>
        {screenState === 'LOADING' && <LoadingPage />}
        {screenState === 'QUIZ' && (
        <QuestionWidgetExternal
          question={question}
          totalQuestions={totalQuestions}
          questionIndex={questionIndex}
          onSubmit={handleSubmit}
          addResult={addResult}
          other={dbExterno}
        />
        )}

        {screenState === 'RESULT' && <ResultPage results={results} other={dbExterno} />}
      </QuizContainer>

      <GithubCorner projectUrl="https://github.com/lucasgmelo" />
    </Page>
  );
}
