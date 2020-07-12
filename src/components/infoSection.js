import React from 'react'
import styled from 'styled-components'

import bagImg from '../images/dupar-catering-logo-bags.jpg'
// TODO: Make this reusable
const InfoSection = () => (
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
)

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
    text-align: center;
    text-transform: lowercase;
    margin: 0;
    z-index: 100;

    @media screen and (max-width: 1366px) {
      font-size: 5rem;
    }
    /* FIXME: Heading font sizes */
  }
`;

const SectionImage = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  padding: 0 5%;
  text-align: center;
`;

const InnerImageWrapper = styled.div`
  max-width: 80%;
  margin-bottom: -2%;
`;

const SectionInfo = styled.div`
  padding-left: 51%;

  h3 {
    max-width: 75%;
    line-height: 1.1em;
    margin-bottom: 1.76rem;
  }

  p {
    max-width: 85%;
    margin-bottom: 2.35rem;
  }
`;

export default InfoSection