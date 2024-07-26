import React, { useEffect } from 'react';
import {
  SubTitle,
  FavouritesContainer,
  Title,
  CatalogTitle,
  CatalogSubTitle,
  FavouritesCatalogHeadline,
  FavouritesHeadline,
} from './styled';
import Loader from '@components/Loader/Loader';
import ArtworksCatalog from '@components/ArtworksCatalog/ArtworksCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import { fetchFavourites } from 'store/slices/favouritesSlice';
import favIcon from '@assets/icons/iconFavourites.svg';

const FavouritesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { favourites, isLoadingFavourites, items } = useSelector(
    (state: RootState) => state.favourites,
  );

  useEffect(() => {
    dispatch(
      fetchFavourites({ limit: 18, ids: items.join(','), isSearchable: false }),
    );
  }, [dispatch, items]);

  return (
    <FavouritesContainer>
      {isLoadingFavourites ? (
        <Loader />
      ) : (
        favourites && (
          <>
            <FavouritesHeadline>
              <Title>Here Are Your</Title>
              <SubTitle>
                <img src={favIcon} alt="favourites" />
                <span>Favorites</span>
              </SubTitle>
            </FavouritesHeadline>

            <FavouritesCatalogHeadline>
              <CatalogSubTitle>Saved by you</CatalogSubTitle>
              <CatalogTitle>Your favorites list</CatalogTitle>
            </FavouritesCatalogHeadline>
            <ArtworksCatalog artwork={favourites} />
          </>
        )
      )}
    </FavouritesContainer>
  );
};

export default FavouritesPage;
