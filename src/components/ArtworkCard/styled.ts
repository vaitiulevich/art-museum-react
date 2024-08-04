import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const ArtworkCardContainer = styled.div`
  text-align: center;
`;

export const ArtworkContent = styled.div`
  width: 90%;
  height: 5.8rem;
  position: relative;
  bottom: 8%;
  margin: auto;
  border: ${(props) => props.theme.border};
  padding: 0.7rem;
  background-color: ${(props) => props.theme.colors.fillBase};
`;

export const ArtworkImg = styled.div`
  height: 25rem;
  background-color: ${(props) => props.theme.colors.fillFrame};
  display: flex;
  overflow: hidden;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}px) {
    height: 21rem;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    height: 17rem;
  }
`;
