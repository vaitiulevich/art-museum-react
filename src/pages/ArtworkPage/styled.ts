import styled from 'styled-components';

export const ArtworkPageContainer = styled.section`
  width: 100%;
  display: flex;
  padding: 1rem 15%;
`;
export const FavoriteMark = styled.div`
  position: relative;
  right: 50px;
  top: 7px;
  height: 45px;
  width: 48px;
  display: flex;
  background-color: #f9f9f9;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #fbd7b2;
  }
`;

export const ArtworkImg = styled.div`
  width: auto;
  height: 100%;

  max-height: 500px;
  max-width: 600px;

  img {
    width: 100%;
  }
`;

export const ArtworkImgBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ArtworkContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArtworkHeadline = styled.h2`
  font-size: 2rem;
  font-weight: 100;
  margin-bottom: 1rem;
`;

export const ArtworkArtist = styled.h3`
  font-size: 1.1rem;
  font-weight: 100;
  color: #e0a449;
  margin: 0 0 0.3rem;
`;

export const ArtworkDates = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`;

export const ArtworkDetails = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;

  span {
    color: #e0a449;
  }
`;
export const ArtworDomain = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const ArtworkLoader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
