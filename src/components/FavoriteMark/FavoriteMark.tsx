import bookmark from '@assets/icons/bookmark.svg';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '@store/actions/favoriteActions';
// import { addFavorite, removeFavorite } from 'store/slices/favouritesSlice';
import { RootState } from '@store/store';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FavoriteMarkContainer } from './styled';

interface FavoriteMarkProps {
  id: number;
}

const FavoriteMark: React.FC<FavoriteMarkProps> = ({ id }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourites.items);

  const isFavourited = favourites.includes(id);

  const handleToggleFavourite = useCallback(() => {
    if (isFavourited) {
      dispatch({
        type: REMOVE_FAVORITE,
        payload: id,
      });
    } else {
      dispatch({
        type: ADD_FAVORITE,
        payload: id,
      });
    }
  }, [id, isFavourited]);

  return (
    <FavoriteMarkContainer $isfavorite={isFavourited}>
      <div onClick={handleToggleFavourite}>
        <img src={bookmark} alt="Bookmark icon" />
      </div>
    </FavoriteMarkContainer>
  );
};

export default memo(FavoriteMark);
