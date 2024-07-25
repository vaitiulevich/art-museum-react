import React from 'react';
import { HeaderContainer, Logo, FavoriteMark, Menu } from './styled';
import logo from '@assets/icons/museum-logo.svg';
import bookmark from '@assets/icons/bookmark.svg';
import home from '@assets/icons/home.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="museum art" />
      </Logo>
      <Menu>
        <Link to={'/'}>
          <FavoriteMark>
            <img src={home} alt="home" />
          </FavoriteMark>
          <span>Home</span>
        </Link>
        <Link to={'/favorites'}>
          <FavoriteMark>
            <img src={bookmark} alt="bookmark" />
          </FavoriteMark>
          <span>Your favorites</span>
        </Link>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
