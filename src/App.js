import React from 'react'

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import Theme from './theme/theme'
import Header from './components/header'
import Navbar from './components/navbar'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContainer>
        <Header />
        <Navbar />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App

const AppContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.bgGrey};
  height: 100vh;
  padding: 0 10.5%;
`