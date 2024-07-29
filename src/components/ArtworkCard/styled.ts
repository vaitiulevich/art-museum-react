import styled from 'styled-components';

export const ArtworkCardContainer = styled.div`
  text-align: center;
`;

export const ArtworkContent = styled.div`
  width: 90%;
  height: 100px;
  position: relative;
  bottom: 8%;
  margin: auto;
  border: solid 1px #f0f1f1;
  padding: 0.7rem;
  background-color: #fff;
`;

export const ArtworkImg = styled.div`
  height: calc(calc(1vw + 1vh) * 21);
  background-color: #eaeaea;
  display: flex;
  overflow: hidden;
  justify-content: center;
`;
