import React, { memo, useCallback } from 'react';
import { FavoriteMarkContainer } from './styled';
import bookmark from '@assets/icons/bookmark.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'store/slices/favouritesSlice';
import { RootState } from 'store/store';

interface FavoriteMarkProps {
  id: number;
}

const FavoriteMark: React.FC<FavoriteMarkProps> = ({ id }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourites.items);

  const isFavourited = favourites.includes(id);

  const handleToggleFavourite = useCallback(() => {
    if (isFavourited) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  }, [dispatch, id, isFavourited]);

  return (
    <FavoriteMarkContainer $isfavorite={isFavourited}>
      <div onClick={handleToggleFavourite}>
        <img src={bookmark} alt="Bookmark icon" />
      </div>
    </FavoriteMarkContainer>
  );
};

export default memo(FavoriteMark);
