import styled from 'styled-components'
import db from '../db.json'
import Image from 'next/image'

const Page = styled.div`
  height: 100vh;
  background: linear-gradient(142.62deg, #CE9FFC -43.31%, #7367F0 129.93%);
  position: relative;
`

const Stars = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/Stars.png');
  background-size: cover;
  position: absolute;
`;

export default function Home() {
  return (
    <Page>
      <Stars />
      AAAAAAAA
    </Page>
  );
}
