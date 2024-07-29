import React, { useEffect, useState } from 'react';
import {
  HeaderContainer,
  Logo,
  FavoriteMark,
  HorizontalMenu,
  BurgerMenu,
  BurgerMenuPanels,
} from './styled';
import logo from '@assets/icons/museum-logo.svg';
import bookmark from '@assets/icons/bookmark.svg';
import home from '@assets/icons/home.svg';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="museum art" />
      </Logo>
      {isMobile ? (
        <>
          <BurgerMenuPanels open={open} onClick={handleClick}>
            <div />
            <div />
            <div />
          </BurgerMenuPanels>
          <BurgerMenu open={open}>
            {location.pathname !== '/' && (
              <Link to={'/'} onClick={handleClick}>
                <FavoriteMark>
                  <img src={home} alt="home" />
                </FavoriteMark>
                <span>Home</span>
              </Link>
            )}

            <Link to={'/favorites'} onClick={handleClick}>
              <FavoriteMark>
                <img src={bookmark} alt="bookmark" />
              </FavoriteMark>
              <span>Your favorites</span>
            </Link>
          </BurgerMenu>
        </>
      ) : (
        <HorizontalMenu>
          {location.pathname !== '/' && (
            <Link to={'/'}>
              <FavoriteMark>
                <img src={home} alt="home" />
              </FavoriteMark>
              <span>Home</span>
            </Link>
          )}

          <Link to={'/favorites'}>
            <FavoriteMark>
              <img src={bookmark} alt="bookmark" />
            </FavoriteMark>
            <span>Your favorites</span>
          </Link>
        </HorizontalMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
