import { images } from '@constants/images';
import { RootState } from '@store/store';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { FavoriteMarkContainer } from './styled';
import { toggleFavorite } from '@utils/favorite.utils';

interface FavoriteMarkProps {
  id: number;
}

const FavoriteMark: React.FC<FavoriteMarkProps> = ({ id }) => {
  const favourites = useSelector((state: RootState) => state.favourites.items);
  const isFavourited = favourites.includes(id);
  const handleToggleFavourite = useCallback(() => {
    toggleFavorite(id, isFavourited);
  }, [id, isFavourited]);

  return (
    <FavoriteMarkContainer $isfavorite={isFavourited}>
      <div onClick={handleToggleFavourite}>
        <img src={images.bookmarkIcon} alt="Bookmark icon" />
      </div>
    </FavoriteMarkContainer>
  );
};

export default memo(FavoriteMark);
