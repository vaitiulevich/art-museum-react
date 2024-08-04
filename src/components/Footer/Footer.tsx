import { images } from '@constants/images';
import { MODSEN_URL } from '@constants/urls';
import React from 'react';

import { FooterContainer, Logo, ModsenLogo } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo>
        <img src={images.logoLight} alt="museum art" />
      </Logo>
      <ModsenLogo>
        <a href={MODSEN_URL}>
          <img src={images.logoModsen} alt="modsen" />
        </a>
      </ModsenLogo>
    </FooterContainer>
  );
};

export default Footer;
