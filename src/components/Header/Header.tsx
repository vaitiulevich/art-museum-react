import bookmark from '@assets/icons/bookmark.svg';
import home from '@assets/icons/home.svg';
import logo from '@assets/icons/museum-logo.svg';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  BurgerMenu,
  BurgerMenuPanels,
  FavoriteMark,
  HeaderContainer,
  HorizontalMenu,
  Logo,
  Overlay,
} from './styled';

const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleOpenMenu = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
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
          <Overlay open={open} onClick={handleCloseMenu} />
          <BurgerMenuPanels open={open} onClick={handleOpenMenu}>
            <div />
            <div />
            <div />
          </BurgerMenuPanels>
          <BurgerMenu open={open}>
            {location.pathname !== '/' && (
              <Link to={'/'} onClick={handleCloseMenu}>
                <FavoriteMark>
                  <img src={home} alt="home" />
                </FavoriteMark>
                <span>Home</span>
              </Link>
            )}

            <Link to={'/favorites'} onClick={handleCloseMenu}>
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
