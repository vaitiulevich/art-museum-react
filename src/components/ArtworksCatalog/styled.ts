import styled from 'styled-components';

export const ArtworksGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 0.7rem;
  justify-content: space-between;
`;

export const ArtworkImg = styled.div`
  height: 65px;
  display: flex;
  width: 25%;
  align-items: center;
  overflow: hidden;
  justify-content: center;
`;

export const ArtworkCard = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 100px;
  padding: 0.5rem;
  background-color: #fff;
  border: solid 1px #f0f1f1;

  .artwork-content {
    width: 70%;
    margin-left: 10px;
  }
`;
