import styled from 'styled-components';

export const ArtworkCardContainer = styled.div`
  text-align: center;
`;

export const ArtworkContent = styled.div`
  width: 90%;
  height: 100px;
  text-align: left;
  background-color: #fff;
  position: relative;
  bottom: 8%;
  margin: auto;
  border: solid 1px #f0f1f1;
  padding: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArtworkInfo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArtworkImg = styled.div`
  height: 400px;
  background-color: #eaeaea;
  display: flex;
  overflow: hidden;
  justify-content: center;
`;

export const ArtworkTitle = styled.h3`
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;

export const ArtworkArtist = styled.p`
  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #e0a449;
  margin: 0.3rem 0 1rem;
`;
export const ArtworDomain = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const FavoriteMark = styled.div`
  height: 45px;
  width: 45px;
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
