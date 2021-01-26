import db from '../db.json'
import {Widget} from '../src/components/widget'
import Footer from '../src/components/Footer'
import GithubCorner from '../src/components/GithubCorner'
import {Page, Stars, QuizContainer, Title, Subtitle, Text, Detail, Logo, Man} from '../src/components/MainStyles' 

export default function Home() {
  return (
    <Page>
      <Man />
      <Stars />
        <QuizContainer>
        {/* <Logo /> */}
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
      <GithubCorner projectUrl="https://github.com/lucasgmelo/rpdr-quiz"/>
    </Page>
  );
}
