import styled from 'styled-components';

export const FavoriteMarkContainer = styled.div<{ $isfavorite: boolean }>`
  height: 3rem;
  width: 3rem;
  display: flex;
  background-color: ${(props) => (props.$isfavorite ? '#fbd7b2' : '#f9f9f9')};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.8s;

  &:hover {
    background-color: #fbd7b2;
  }
`;
