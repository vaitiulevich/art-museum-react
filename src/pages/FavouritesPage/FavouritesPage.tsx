import favIcon from '@assets/icons/iconFavourites.svg';
import ArtworksCatalog from '@components/ArtworksCatalog/ArtworksCatalog';
import Loader from '@components/Loader/Loader';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavourites } from 'store/slices/favouritesSlice';
import { AppDispatch, RootState } from 'store/store';

import {
  CatalogSubTitle,
  CatalogTitle,
  FavouritesCatalogHeadline,
  FavouritesContainer,
  FavouritesHeadline,
  SubTitle,
  Title,
} from './styled';

const FavouritesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { favourites, isLoadingFavourites, items } = useSelector(
    (state: RootState) => state.favourites,
  );

  const isEmpty = useMemo(() => items.length === 0, [items]);

  useEffect(() => {
    if (!isEmpty) {
      dispatch(
        fetchFavourites({
          limit: 18,
          ids: items.join(','),
          isSearchable: false,
        }),
      );
    }
  }, [dispatch, items]);

  return (
    <FavouritesContainer>
      <FavouritesHeadline>
        <Title>Here Are Your</Title>
        <SubTitle>
          <img src={favIcon} alt="favourites" />
          <span>Favorites</span>
        </SubTitle>
      </FavouritesHeadline>
      {isLoadingFavourites ? (
        <Loader />
      ) : (
        favourites && (
          <>
            <FavouritesCatalogHeadline>
              <CatalogSubTitle>Saved by you</CatalogSubTitle>
              <CatalogTitle>Your favorites list</CatalogTitle>
            </FavouritesCatalogHeadline>
            {isEmpty ? (
              <p>Empty here yet</p>
            ) : (
              <ArtworksCatalog artwork={favourites} />
            )}
          </>
        )
      )}
    </FavouritesContainer>
  );
};

export default FavouritesPage;
