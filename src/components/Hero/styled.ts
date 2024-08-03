import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const HeroTitle = styled.h1`
  width: 70%;
  font-size: ${(props) => props.theme.typography.fontSize.largest};
  text-align: center;
  margin: 5rem 0 3rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};

  span {
    color: ${(props) => props.theme.colors.accent};
  }
  @media (max-width: ${breakpoints.tablet}px) {
    width: 100%;
  }
`;
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
`;
