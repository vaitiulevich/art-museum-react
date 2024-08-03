import { breakpoints } from '@constants/breakpoints';
import styled from 'styled-components';

export const ArtworkPageContainer = styled.section`
  width: 100%;
  display: flex;

  @media (max-width: ${breakpoints.tablet}px) {
    flex-wrap: wrap;
  }
`;
export const FavoriteMarkBlock = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const ArtworkImg = styled.div`
  width: auto;
  height: 100%;
  text-align: center;

  max-height: 25rem;
  max-width: 35rem;
  background-color: ${(props) => props.theme.colors.fillFrame};

  img {
    width: auto;
    max-width: 100%;
  }
`;

export const ArtworkImgBlock = styled.div`
  position: relative;
  margin-right: 1rem;
  @media (max-width: ${breakpoints.tablet}px) {
    margin-right: 0;
  }
`;

export const ArtworkContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArtworkHeadline = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  font-weight: ${(props) => props.theme.typography.fontWeight.thin};
  margin-bottom: 1rem;
`;

export const ArtworkArtist = styled.h3`
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  font-weight: ${(props) => props.theme.typography.fontWeight.thin};
  color: ${(props) => props.theme.colors.accentText};
  margin: 0 0 0.3rem;
`;

export const ArtworkDates = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.small};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;

export const ArtworkDetails = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.small};
  margin-bottom: 0.5rem;

  span {
    color: ${(props) => props.theme.colors.accentText};
  }
`;
export const ArtworDomain = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;

export const ArtworkLoader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
