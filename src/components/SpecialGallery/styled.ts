import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const SpecialGalleryContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const SpecialGalleryHeadline = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const SubTitle = styled.p`
  color: #e0a449;
  font-size: 1rem;
  margin: 0;
`;

export const Title = styled.h2`
  color: #393939;
  font-weight: 300;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 2rem;
  margin: 0;
`;

export const ArtworksGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  gap: 1rem;

  @media (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: 100%;
  }
`;
