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
  border: solid 0.01rem #f0f1f1;
  padding: 0.7rem;
  background-color: #fff;
`;

export const ArtworkImg = styled.div`
  height: 21rem;
  background-color: #eaeaea;
  display: flex;
  overflow: hidden;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}px) {
    height: 17rem;
  }
`;
