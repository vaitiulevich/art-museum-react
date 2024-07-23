import React from 'react';
import { HeaderContainer, Favorites, Logo } from './styled';
import logo from '@assets/icons/museum-logo.svg';
import bookmark from '@assets/icons/bookmark.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="museum art" />
      </Logo>
      <Favorites>
        <img src={bookmark} alt="bookmark" />
        <span>Your favorites</span>
      </Favorites>
    </HeaderContainer>
  );
};

export default Header;
