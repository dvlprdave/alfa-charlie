import React from 'react'

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import Theme from './theme/theme'
import Header from './components/header'
import Hero from './components/hero'
import InfoSection from './components/infoSection'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContainer>
        <Header />
        <Hero />
        <InfoSection />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App

const AppContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.mainBg};
  height: 100vh;
  padding: 0 10.5%;

  @media screen and (max-width: 480px) {
    padding: 0 2rem;
  }
`