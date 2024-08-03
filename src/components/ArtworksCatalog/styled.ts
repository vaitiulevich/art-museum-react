import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const ArtworksGrid = styled.div`
  width: 100%;
  height: -webkit-fill-available;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 0.7rem;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: 50% 50%;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: 100%;
  }
`;

export const ArtworkImg = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  background-color: #eaeaea;
`;

export const ArtworkCard = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 5.5rem;
  padding: 0.5rem;
  background-color: #fff;
  border: solid 0.01rem #f0f1f1;

  .artwork-content {
    width: 70%;
    margin-left: 1rem;
  }

  a {
    width: 25%;
  }
`;
