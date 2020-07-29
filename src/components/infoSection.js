import React from 'react'
import styled from 'styled-components'

import bagImg from '../images/dupar-catering-logo-bags.jpg'
// TODO: Make this reusable
const InfoSection = () => (
  <MainWrapper>
    <SectionContainer>
      <SectionHeading>
        <h2>design that matters</h2>
      </SectionHeading>
      <SectionImage>
        <InnerImageWrapper>
        <img src={bagImg} alt='catering bags' />
        </InnerImageWrapper>
      </SectionImage>
      <SectionInfo>
        <h3>Insight meets impact.</h3>
        <p>
        We work with collaborative, environmentally-conscious companies that pair their passion with purpose. With award-winning design, a clear aesthetic, and the tenacity to create positive change, we help convey your brand’s mission with a visual identity that speaks volumes.  
        <br></br>
        <br></br>
        Every great brand has an even better purpose behind it, and it takes experience, transparency, and curiosity to set it apart. Luckily we’ve got that in spades. Through our commitment to intentional design, we create new ways to share your singular story and help you make a difference in the world.
        </p>
      </SectionInfo>
    </SectionContainer>
  </MainWrapper>
)

const MainWrapper = styled.div`
  padding: 0 12%;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionHeading = styled.div`
  margin-bottom: 4rem;

  h2 {
    position: relative;
    font-size: 7.2rem;
    text-align: center;
    text-transform: lowercase;
    color: ${(props) => props.theme.colors.white};
    margin: 0;
    z-index: 100;

    @media screen and (max-width: 1600px) {
      font-size: 6.5rem;
    }

    @media screen and (max-width: 1366px) {
      font-size: 6rem;
    }

    @media screen and (max-width: 768px) {
      max-width: 70%;
      text-align: left;
      line-height: .8;
    }

    @media screen and (max-width: 480px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 320px) {
      font-size: 4rem;
    }
  }
`;

const SectionImage = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  text-align: center;

  @media screen and (max-width: 768px) {
    position: static;
    width: 100%;
    margin-top: -25%;
  }
`;

const InnerImageWrapper = styled.div`
  max-width: 80%;
  margin-bottom: -2%;
  padding: 0 5%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`;

const SectionInfo = styled.div`
  padding-left: 51%;

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
    padding: 0;
  }

  h3 {
    max-width: 75%;
    line-height: 1.1em;
    margin-bottom: 1.76rem;

    @media screen and (max-width: 1366px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
      max-width: 100%;
      font-size: 2rem;
    }
  }

  p {
    max-width: 85%;
    margin-bottom: 2.35rem;

    @media screen and (max-width: 480px) {
      max-width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

export default InfoSection