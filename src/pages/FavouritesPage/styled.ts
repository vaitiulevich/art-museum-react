import styled from 'styled-components';

export const FavouritesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSize.largest};
  text-align: center;
  margin-top: 2rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;

export const SubTitle = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.typography.fontSize.largest};
  text-align: center;
  margin-top: 2rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  color: ${(props) => props.theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const CatalogSubTitle = styled.p`
  color: ${(props) => props.theme.colors.accentText};
  margin: 0;
`;

export const CatalogTitle = styled.h3`
  font-weight: ${(props) => props.theme.typography.fontWeight.normal};
  font-size: ${(props) => props.theme.typography.fontSize.large};
  margin: 0;
`;

export const FavouritesCatalogHeadline = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const FavouritesHeadline = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
  align-items: center;
`;
