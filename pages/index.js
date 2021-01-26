import db from '../db.json'
import {Widget} from '../src/components/widget'
import Footer from '../src/components/Footer'
import GithubCorner from '../src/components/GithubCorner'
import {Page, Stars, QuizContainer, Title, Subtitle, Text, Detail, Logo, Man} from '../src/components/MainStyles'
import { Grid, GridItem, Image, Flex } from "@chakra-ui/react"
import useMedia from '../hooks/useMedia'

export default function Home() {
  const web = useMedia('(min-width: 1080px)');

  return (
    <Page>
      <Man />
      <Stars />
      <Grid>
        <GridItem>
        <QuizContainer>
        <Widget>
          <Widget.Header>
            <Title>Rupaul's Drag Race Quiz</Title>
          </Widget.Header>
          <Widget.Content>
            <Subtitle>ola</Subtitle>
            <Text>eae</Text>
            <Detail>entao</Detail>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <Title color={db.theme.colors.purpleText}>Quizes da Galera </Title>
            <button>oi</button>
          </Widget.Content>
        </Widget>
        <Footer />
        </QuizContainer>
        </GridItem>
        {web && <GridItem 
        colStart={2} 
        boxSize="100%"
         >
           <Flex
        justifyContent="center"
        alignItems="center"
        boxSize="100%"
        >
          <Image src={db.logo} alt="logo"
          width="75%"
          maxWidth="600px"
          top="50%"
          />
        </Flex>
        </GridItem>
        }
      </Grid>
        
      <GithubCorner projectUrl="https://github.com/lucasgmelo"/>
    </Page>
  );
}
