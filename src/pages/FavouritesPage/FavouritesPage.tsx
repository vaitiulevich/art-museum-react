import ArtworksCatalog from '@components/ArtworksCatalog/ArtworksCatalog';
import Loader from '@components/Loader/Loader';
import { images } from '@constants/images';
import { RootState } from '@store/store';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  CatalogSubTitle,
  CatalogTitle,
  FavouritesCatalogHeadline,
  FavouritesContainer,
  FavouritesHeadline,
  SubTitle,
  Title,
} from './styled';
import { loadFavourites } from '@utils/favorite.utils';

const FavouritesPage: React.FC = () => {
  const { favourites, items } = useSelector(
    (state: RootState) => state.favourites,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isEmpty = useMemo(() => items.length === 0, [items]);

  useEffect(() => {
    loadFavourites(items, setLoading, setError);
  }, [items, isEmpty]);

  return (
    <FavouritesContainer>
      <FavouritesHeadline>
        <Title>Here Are Your</Title>
        <SubTitle>
          <img src={images.favoriteIcon} alt="favourites" />
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
