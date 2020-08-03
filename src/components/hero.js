import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import heroImg from '../images/hero-img.jpg'

const Hero = () => {
  const variants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 100, opacity: 0 },
  }

  return (
    <Wrapper>
      <Intro
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.9, duration: 1.2 }}
        variants={variants}
      >
        <h3>We build purposeful brands for a sustainable future.</h3>
        <p>
          Anchored in simplicity, we develop strategic design and creative
          branding for businesses that want to do better and be better.
        </p>
        <ViewMore href=''>
          <span>View our work</span>
        </ViewMore>
      </Intro>

      <HeroImage
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 1.5 }}
      >
        <img src={heroImg} alt='' />
        </HeroImage>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 100vh;
  padding-top: 3%;
  margin-bottom: 8rem;
`

const Intro = styled(motion.div)`
  margin-top: 10vh;
  flex: 0 0 30%;
  z-index: 10;

  p {
    max-width: 70%;
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 20px;
  }

  @media screen and (max-width: 551px) {
    h3 {
      font-size: 1.9rem;
    }

    p {
      max-width: 95%;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 1600px) {
    flex: 0 0 40%;
  }

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`

const ViewMore = styled.a`
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  padding: 16px 0 16px 0;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.redLink};

  ::before {
    content: '';
    display: inline-block;
    border-top: 0.1rem solid ${(props) => props.theme.colors.redLink};
    width: 2rem;
    margin-right: 1rem;
    height: 4px;
  }
`

const HeroImage = styled(motion.div)`
  height: 70vh;
  width: 65%;
  margin-left: -6.84%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1600px) {
    margin-left: -16%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
