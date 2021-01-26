/* eslint-disable max-len */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Grid, GridItem, Image, Flex,
} from '@chakra-ui/react';
import db from '../db.json';
import Widget from '../src/components/widget';
import GithubCorner from '../src/components/GithubCorner';
import {
  Page,
  Stars,
  QuizContainer,
  Title,
  Detail,
  Man,
} from '../src/components/MainStyles';
import useMedia from '../hooks/useMedia';

export default function Home() {
  const web = useMedia('(min-width: 1080px)');
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <Page>
      <Man />
      <Stars />
      <Grid>
        <GridItem>
          <QuizContainer>
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
                <Title>Pergunta 1 de 5</Title>
              </Widget.Header>
              <Widget.Content>
                <Widget.Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    router.push(`/quiz?name=${name}`);
                  }}
                >
                  <Detail>
                    E aí, conhece mesmo sobre Rupaul&apos;s?
                    <i>This is your last chance to impress me.</i>
                  </Detail>
                  <Widget.Input
                    type="text"
                    placeholder="Qual é o teu nome?"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Widget.Button type="submit" disabled={name.length === 0} upper="uppercase" letter="0.1rem" color={db.theme.colors.purpleText} bg={db.theme.colors.btn}>
                    jogar
                  </Widget.Button>
                </Widget.Form>
              </Widget.Content>
            </Widget>
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
