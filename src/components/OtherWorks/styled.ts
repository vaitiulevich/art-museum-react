import styled from 'styled-components';

export const OtherWorksContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem 15%;
`;

export const OtherWorksHeadline = styled.div`
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
