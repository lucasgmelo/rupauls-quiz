/* eslint-disable max-len */
import React from 'react';
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

export default function Home() {
  const web = useMedia('(min-width: 1080px)');
  const totalQuestions = db.questions.length;
  const questionIndex = 1;
  const question = db.questions[questionIndex];
  // const router = useRouter();

  return (
    <Page>
      <Man />
      <Stars />
      <Grid>
        <GridItem>
          <QuizContainer>
            <QuestionWidget question={question} totalQuestions={totalQuestions} questionIndex={questionIndex} />
          </QuizContainer>
        </GridItem>
        {web && (
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
