import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;

    font-family: 'Source Sans Pro', sans-serif;

    color: white;
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
      <meta property="og:image" content="/OG.png"></meta>
      <meta property="og:title" content="Quiz | Rupaul's Drag Race"></meta>
      <meta property="og:description" content="Um quiz sobre um dos maiores reality shows do mundo."></meta>

      <title>Quiz | Rupaul's Drag Race</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
