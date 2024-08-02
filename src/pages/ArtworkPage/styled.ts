import styled from 'styled-components';

export const ArtworkPageContainer = styled.section`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const FavoriteMarkBlock = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ArtworkImg = styled.div`
  width: auto;
  height: 100%;
  text-align: center;

  max-height: 500px;
  max-width: 600px;
  background-color: #80808033;

  img {
    width: auto;
    max-width: 100%;
  }
`;

export const ArtworkImgBlock = styled.div`
  position: relative;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
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
