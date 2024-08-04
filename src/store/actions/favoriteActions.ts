import {
  ADD_FAVORITE,
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_REQUEST,
  FETCH_FAVOURITES_SUCCESS,
  REMOVE_FAVORITE,
} from '@constants/actionTypes';
import { favouriteItem } from 'interfaces/favorite.interface';
import {
  AddFavoriteAction,
  FetchFavouritesFailureAction,
  FetchFavouritesRequestAction,
  FetchFavouritesSuccessAction,
  RemoveFavoriteAction,
} from 'interfaces/favoriteAction.interface';

export const addFavorite = (id: number): AddFavoriteAction => ({
  type: ADD_FAVORITE,
  payload: id,
});

export const removeFavorite = (id: number): RemoveFavoriteAction => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

export const fetchFavouritesRequest = (): FetchFavouritesRequestAction => ({
  type: FETCH_FAVOURITES_REQUEST,
});

export const fetchFavouritesSuccess = (
  data: favouriteItem[],
): FetchFavouritesSuccessAction => ({
  type: FETCH_FAVOURITES_SUCCESS,
  payload: data,
});

export const fetchFavouritesFailure = (
  error: string,
): FetchFavouritesFailureAction => ({
  type: FETCH_FAVOURITES_FAILURE,
  payload: error,
});
