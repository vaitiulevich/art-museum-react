import favIcon from '@assets/icons/iconFavourites.svg';
import ArtworksCatalog from '@components/ArtworksCatalog/ArtworksCatalog';
import Loader from '@components/Loader/Loader';
import { fetchFavouritesSuccess } from '@store/actions/favoriteActions';
// import { addFavorite, removeFavorite } from '@store/actions/favouritesActions';
import { AppDispatch, RootState } from '@store/store';
import { fetchArtworksApi } from '@utils/api';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  const { favourites, items } = useSelector(
    (state: RootState) => state.favourites,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isEmpty = useMemo(() => items.length === 0, [items]);

  useEffect(() => {
    loadFavourites();
  }, [items, isEmpty]);
  const loadFavourites = async () => {
    if (!isEmpty) {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchArtworksApi({
          ids: items.join(','),
          isSearchable: false,
        });
        dispatch(fetchFavouritesSuccess(response.data));
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <FavouritesContainer>
      <FavouritesHeadline>
        <Title>Here Are Your</Title>
        <SubTitle>
          <img src={favIcon} alt="favourites" />
          <span>Favorites</span>
        </SubTitle>
      </FavouritesHeadline>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error ? (
            <p>Error: {error}</p>
          ) : (
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
          )}
        </>
      )}
    </FavouritesContainer>
  );
};

export default FavouritesPage;
