import React from 'react'
import styled from 'styled-components';
// import {motion} from 'framer-motion'

import heroImg from '../images/hero-img.jpg'

const Hero = () => (
  <Wrapper>
    <Intro>
      <h3>We build purposeful brands for a sustainable future.</h3>
      <p>Anchored in simplicity, we develop strategic design and creative branding for businesses that want to do better and be better.</p>
      <ViewMore href="">
        <span>View our work</span>
      </ViewMore>
    </Intro>

    <HeroImage>
      <img src={heroImg} alt=""/>
    </HeroImage>
  </Wrapper>
)

export default Hero

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 100vh;
  padding-top: 3%;
  margin-bottom: 3rem;
`;

const Intro = styled.div`
  margin-top: 10vh;
  flex: 0 0 30%;
  z-index: 10;

  p {
    max-width: 70%;
    color: ${props => props.theme.colors.lightGrey};
    font-size: 20px;
  }

  @media screen and (min-width: 1925px) {
    h3 {
      font-size: 1.9vw;
    }
  }
`;

const ViewMore = styled.a`
  text-transform: uppercase;
  font-size: .88rem;
  letter-spacing: .16em;
  padding: 16px 0 16px 0;
  white-space: nowrap;
  color: ${props => props.theme.colors.redLink};

  ::before {
    content: "";
    display: inline-block;
    border-top: .1rem solid ${props => props.theme.colors.redLink};;
    width: 2rem;
    margin-right: 1rem;
    height: 4px;
  }
`;

const HeroImage = styled.div`
  height: 70vh;
  width: 65%;
  margin-left: -6.84%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;