/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import {
  Grid, GridItem, Image, Flex,
} from '@chakra-ui/react';
import db from '../db.json';
import GithubCorner from '../src/components/GithubCorner';
import {
  Page,
  Stars,
  QuizContainer,
  Man,
} from '../src/components/MainStyles';
import QuestionWidget from '../src/components/QuestionWidget';
import useMedia from '../hooks/useMedia';
import LoadingPage from '../src/components/LoadingPage';

export default function QuizPage() {
  const [screenState, setScreenState] = useState('LOADING');
  const web = useMedia('(min-width: 1080px)');
  const totalQuestions = db.questions.length;
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  // const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setScreenState('QUIZ');
    }, 1.2 * 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setcurrentQuestion(questionIndex + 1);
    } else {
      setScreenState('RESULT');
    }
  }

  return (
    <Page>
      <Man />
      <Stars />
      <Grid>
        <GridItem>
          <QuizContainer>
            {screenState === 'LOADING' && <LoadingPage />}

            {screenState === 'QUIZ' && (
            <QuestionWidget
              question={question}
              totalQuestions={totalQuestions}
              questionIndex={questionIndex}
              onSubmit={handleSubmit}
            />
            )}

            {screenState === 'RESULT' && <h1>olaaa</h1>}
          </QuizContainer>
        </GridItem>
        {web && !(screenState === 'LOADING') && (
          <GridItem colStart={2} boxSize="100%">
            <Flex justifyContent="center" alignItems="center" boxSize="100%">
              <Image
                src={db.logo}
                alt="logo"
                width="75%"
                maxWidth="600px"
                top="50%"
              />
            </Flex>
          </GridItem>
        )}
      </Grid>

      <GithubCorner projectUrl="https://github.com/lucasgmelo" />
    </Page>
  );
}
