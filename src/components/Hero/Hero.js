import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello! I'm Athraja Vibhu Jayawardane <br />
        I'm a software engineering undergraduate at SLIIT and create web applications and android apps.
        </SectionText>
        <Button onClick={() => window.location = 'https://drive.google.com/file/d/1TuA6B_-uDMeZFOv7zxPjnIozK1TLaRFY/view?usp=sharing'}>My CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;