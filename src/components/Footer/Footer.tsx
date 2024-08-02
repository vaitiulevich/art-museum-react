import logoModsen from '@assets/icons/logo-modsen.svg';
import logo from '@assets/icons/museum-logo-light.svg';
import { MODSEN_URL } from '@constants/constants';
import React from 'react';

import { FooterContainer, Logo,ModsenLogo } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo>
        <img src={logo} alt="museum art" />
      </Logo>
      <ModsenLogo>
        <a href={MODSEN_URL}>
          <img src={logoModsen} alt="modsen" />
        </a>
      </ModsenLogo>
    </FooterContainer>
  );
};

export default Footer;
