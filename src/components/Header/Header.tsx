import { images } from '@constants/images';
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
import useWindowSize from '@utils/hooks/useWindowSize';

const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width <= 768);

  const handleOpenMenu = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };
  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);

  return (
    <HeaderContainer>
      <Logo>
        <img src={images.logo} alt="museum art" />
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
                  <img src={images.homeIcon} alt="home" />
                </FavoriteMark>
                <span>Home</span>
              </Link>
            )}

            <Link to={'/favorites'} onClick={handleCloseMenu}>
              <FavoriteMark>
                <img src={images.bookmarkIcon} alt="bookmark" />
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
                <img src={images.homeIcon} alt="home" />
              </FavoriteMark>
              <span>Home</span>
            </Link>
          )}

          <Link to={'/favorites'}>
            <FavoriteMark>
              <img src={images.bookmarkIcon} alt="bookmark" />
            </FavoriteMark>
            <span>Your favorites</span>
          </Link>
        </HorizontalMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
