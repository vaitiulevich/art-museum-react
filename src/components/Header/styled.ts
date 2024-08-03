import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(52, 51, 51, 1) 0%,
    rgba(72, 72, 72, 1) 53%,
    rgba(40, 40, 40, 1) 100%
  );
  padding: 1rem 15%;

  @media (max-width: ${breakpoints.tablet}px) {
    padding: 1rem 3%;
  }
`;
export const Logo = styled.div`
  height: 2.5rem;
`;

export const FavoriteMark = styled.div`
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const HorizontalMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    font-weight: 300;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 1rem;
  }
`;

export const BurgerMenuPanels = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: ${({ open }) => (open ? 'fixed' : 'absolute')};
  top: 1rem;
  right: 2rem;
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  @media (max-width: ${breakpoints.tablet}px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 1rem;
    transform-origin: 0.01rem;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const BurgerMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #333;
  height: 100%;
  text-align: left;
  padding: 4rem 2rem 1rem 1rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 10;

  @media (min-width: ${breakpoints.tablet}px) {
    display: none;
  }

  a {
    color: #fff;
    font-weight: 300;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
