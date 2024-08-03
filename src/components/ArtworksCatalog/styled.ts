import styled from 'styled-components';

export const ArtworksGrid = styled.div`
  width: 100%;
  height: -webkit-fill-available;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 0.7rem;
  justify-content: space-between;

  @media (max-width: 450px) {
    grid-template-columns: 50% 50%;
  }
  @media (max-width: 380px) {
    grid-template-columns: 100%;
  }
`;

export const ArtworkImg = styled.div`
  height: 65px;
  display: flex;
  width: 25%;
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
  max-height: 100px;
  padding: 0.5rem;
  background-color: #fff;
  border: solid 1px #f0f1f1;

  .artwork-content {
    width: 70%;
    margin-left: 10px;
  }
`;
