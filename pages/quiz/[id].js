/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import QuizScreen from '../../src/screens/quiz';

export default function OtherQuiz({ dbExterno }) {
  return (
    <>
      <QuizScreen dbExterno={dbExterno} />
    </>
  );
}

export async function getServerSideProps() {
  const dbExterno = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
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
