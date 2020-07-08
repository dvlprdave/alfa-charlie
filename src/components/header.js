import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <>
    <Logo>alfa charlie</Logo>
    <Title>San Diego Branding Studio</Title>
  </>
)

export default Header

const Logo = styled.p`
  position: absolute;
  top: 30px;
  left: 75px;

  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 0;
`

const Title = styled.p`
  position: absolute;
  top: 45px;
  left: 46.75%;

  font-size: 0.65rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.6em;
`
