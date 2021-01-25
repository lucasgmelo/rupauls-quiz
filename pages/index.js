import styled from 'styled-components'
import db from '../db.json'

const Page = styled.div`
  height: 100vh;
  background: linear-gradient(142.62deg, #CE9FFC -43.31%, #7367F0 129.93%);
  position: relative;
`

const Img = styled.image`
  height: 100vh;
  width: 100vw;
`

export default function Home() {
  return (
    <Page>
      <Img src="../assets/Stars.png" alt="" />
      AAAAAAAA
    </Page>
  );
}
