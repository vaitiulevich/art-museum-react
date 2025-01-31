import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.linerGradientHeader};
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};

  @media (max-width: ${breakpoints.tablet}px) {
    padding: ${(props) => props.theme.indents.containerPaddingMobile};
  }
`;
export const Logo = styled.div`
  height: 2.5rem;
`;

export const FavoriteMark = styled.div`
  height: 1.4rem;
  margin-right: 0.5rem;
`;

export const HorizontalMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.colors.headerLink};
    font-weight: ${(props) => props.theme.typography.fontWeight.thin};
    font-size: ${(props) => props.theme.typography.fontSize.small};
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 1rem;
  }
`;

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.fillOverlay};
  z-index: 1;
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: all 0.3s;
`;

export const BurgerMenuPanels = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: ${({ open }) => open && 'fixed'};
  right: 1rem;
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
    background-color: ${(props) => props.theme.colors.fillBase};
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
  display: block;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.theme.colors.fillMenuPanel};
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
    color: ${(props) => props.theme.colors.headerLink};
    font-weight: ${(props) => props.theme.typography.fontWeight.normal};
    font-size: ${(props) => props.theme.typography.fontSize.small};
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
