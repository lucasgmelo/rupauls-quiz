/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/quiz';

export default function OtherQuiz({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen dbExterno={dbExterno} />
    </ThemeProvider>
  );
}

export async function getServerSideProps() {
  const dbExterno = await fetch('https://breaking-bad-quiz.eliasnepo.vercel.app/api/db')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Falha ao obter dados');
    })
    .then((responseObject) => responseObject)
    .catch((err) => {
      console.log(err);
    });

  console.log(dbExterno);

  return {
    props: {
      dbExterno,
    },
  };
}
