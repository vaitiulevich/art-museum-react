import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 1rem 15%;

  @media (max-width: ${breakpoints.tablet}px) {
    padding: 1rem 3%;
  }
`;
export const Logo = styled.div`
  height: 2.5rem;
`;

export const ModsenLogo = styled.div`
  height: 3rem;
  color: white;
  font-weight: 300;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    height: 100%;
    width: auto;
  }
`;
