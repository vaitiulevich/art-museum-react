import styled from 'styled-components';

export const ArtworkContent = styled.div`
  height: 100%;
  text-align: left;
  background-color: #fff;
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
