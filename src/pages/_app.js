import { createGlobalStyle, ThemeProvider } from 'styled-components'
const globalStyles = require('../../content/data/styles.json')

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const breakpoints = [`${globalStyles.small}px`, `${globalStyles.medium}px`, `${globalStyles.large}px`, `${globalStyles.extraLarge}px`];

// aliases
// breakpoints.sm = globalStyles.small
// breakpoints.md = globalStyles.medium
// breakpoints.lg = globalStyles.large
// breakpoints.xl = globalStyles.extraLarge

const theme = {
  breakpoints: breakpoints,
  // breakpoints: [
  //   '40em', '43em', '64em',
  // ],
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  // theme.breakpoints = pageProps.breakpoints;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}