import React from 'react'
import styled from 'styled-components'

const Navbar = () => (
  <Nav>
    <ul>
      <li>
        <Hamburger />
      </li>
      <li>
        <Instagram
          aria-label='Instagram'
          href='https://www.instagram.com/alfacharlie.co/'
          targe='_blank'
          rel='noopener'
        >
          Instagram
        </Instagram>
      </li>
    </ul>
  </Nav>
)

export default Navbar

const Nav = styled.nav`
  ul {
    margin: 0;
  }
`

const Hamburger = styled.div`
  position: absolute;
  top: calc(1.2rem + 20px);
  right: calc(120px - 2rem);
  /* right: 120px; */
  width: 20px;

  ::after, ::before {
    content: '';
    display: block;
    height: 2px;
    margin: 7px 0;
    background-color: #000;
    transition: all .2s ease-in-out;
  }
`

const Instagram = styled.a`
  position: absolute;
  top: 700px;
  right: 44px;

  font-size: .9rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.6em;
  transform: rotate(90deg);
  color: ${props => props.theme.colors.lightGrey};

  @media screen and (max-width: 768px) {
    display: none;
  }
`
