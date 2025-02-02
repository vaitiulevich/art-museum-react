import { fetchFavouritesSuccess } from '@store/actions/favoriteActions';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '@constants/actionTypes';
import store from '@store/store';
import { Dispatch, SetStateAction } from 'react';
import { fetchArtworksApi } from './api';
import { FetchArtworksResponse } from 'interfaces/artwork.interface';

const dispatch = store.dispatch;

export const toggleFavorite = (id: number, isFavorited: boolean) => {
  if (isFavorited) {
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
};

export const loadFavourites = async (
  items: number[],
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string | null>>,
) => {
  if (items.length === 0) return;

  setLoading(true);
  setError(null);
  try {
    const response: FetchArtworksResponse = await fetchArtworksApi({
      ids: items.join(','),
      isSearchable: false,
    });
    dispatch(fetchFavouritesSuccess(response.data));
  } catch (error) {
    setError((error as Error).message);
  } finally {
    setLoading(false);
  }
};
