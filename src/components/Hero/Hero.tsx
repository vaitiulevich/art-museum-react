import React from 'react';
import { HeroContainer, HeroTitle } from './styled';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroTitle>
        Let’s Find Some <span>Art</span> Here!
      </HeroTitle>
    </HeroContainer>
  );
};

export default Hero;
