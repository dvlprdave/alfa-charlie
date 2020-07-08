import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'

const Header = () => (
  <Wrapper>
    <Logo>alfa charlie</Logo>
    <Heading>San Diego Branding Studio</Heading>
    <Navbar />
  </Wrapper>
)

export default Header

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.2rem;
`;

const Logo = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 0;
  margin-left: -8%;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

const Heading = styled.p`
  align-self: center;
  font-size: .65em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.6em;
  margin: 0;
  margin-top: calc(1.2rem + 2px);
  color: ${props => props.theme.colors.lightGrey};

  @media screen and (max-width: 768px) {
    display: none;
  }
`
