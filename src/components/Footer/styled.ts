import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.fillBase};
  padding: ${(props) => props.theme.indents.containerPaddingDesctop};

  @media (max-width: ${breakpoints.tablet}px) {
    padding: ${(props) => props.theme.indents.containerPaddingMobile};
  }
`;
export const Logo = styled.div`
  height: 2.5rem;
`;

export const ModsenLogo = styled.div`
  height: 3rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.normal};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    height: 100%;
    width: auto;
  }
`;
