/* eslint-disable max-len */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Grid, GridItem, Image, Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Input from '../src/components/Input';
import db from '../db.json';
import Widget from '../src/components/widget';
import GithubCorner from '../src/components/GithubCorner';
import {
  Page,
  Stars,
  QuizContainer,
  Title,
  Text,
  Man,
} from '../src/components/MainStyles';
import useMedia from '../hooks/useMedia';
import Link from '../src/components/Link';

export default function Home() {
  const web = useMedia('(min-width: 1080px)');
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <Page>
      <Man
        as={motion.div}
        transition={{ delay: 1, duration: 0.15 }}
        variants={{
          show: { y: '0' },
          hidden: { y: '-100vh' },
        }}
        initial="hidden"
        animate="show"
      />
      <Stars bgImg={db.bg} />
      <Grid>
        <GridItem>
          <QuizContainer>
            <Widget
              as={motion.section}
              transition={{ duration: 0.5 }}
              variants={{
                show: { opacity: 1, y: '0' },
                hidden: { opacity: 0, y: '100%' },
              }}
              initial="hidden"
              animate="show"
            >
              <Widget.Header>
                <Title>Rupaul&apos;s Drag Race Quiz</Title>
              </Widget.Header>
              <Widget.Content>
                <Widget.Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    router.push(`/quiz?name=${name}`);
                  }}
                >
                  <Text>
                    E aí, conhece mesmo sobre Rupaul&apos;s?
                    <i>This is your last chance to impress me.</i>
                  </Text>
                  <Input
                    name="nomeDoUsuario"
                    placeholder="Qual é o teu nome?"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <Widget.Button type="submit" disabled={name.length === 0} upper="uppercase" letter="0.1rem" color={db.theme.colors.purpleText} bg={db.theme.colors.btn}>
                    jogar
                  </Widget.Button>
                </Widget.Form>
              </Widget.Content>
            </Widget>
            <Widget
              as={motion.section}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                show: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              initial="hidden"
              animate="show"
            >
              <Widget.Content>
                <Title color={db.theme.colors.purpleText}>
                  Quizes da Galera
                  {' '}
                </Title>
                <Text>
                  Acesse outros quizes desenvolvidos durante a
                  <i> 2ª Imersão Alura!</i>
                </Text>
                <ul>
                  {db.external.map((linkExterno) => {
                    const [projectName, githubUser] = linkExterno.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.');
                    return (
                      <li key={linkExterno}>
                        <Widget.Select as={Link} href={`/quiz/${projectName}___${githubUser}`}>{`${githubUser}/${projectName}`}</Widget.Select>
                      </li>
                    );
                  })}
                </ul>
              </Widget.Content>
            </Widget>
          </QuizContainer>
        </GridItem>
        {web && (
          <GridItem
            colStart={2}
            boxSize="100%"
            as={motion.section}
            transition={{ duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          >
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
