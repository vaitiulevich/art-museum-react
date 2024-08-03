import styled from 'styled-components';

export const FavoriteMarkContainer = styled.div<{ $isfavorite: boolean }>`
  height: 3rem;
  width: 3rem;
  display: flex;
  background-color: ${(props) =>
    props.$isfavorite
      ? props.theme.colors.activeFavorite
      : props.theme.colors.fillFavorite};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.8s;

  &:hover {
    background-color: ${(props) => props.theme.colors.activeFavorite};
  }
`;
