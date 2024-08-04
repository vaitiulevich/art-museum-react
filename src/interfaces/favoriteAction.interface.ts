import {
  ADD_FAVORITE,
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_REQUEST,
  FETCH_FAVOURITES_SUCCESS,
  REMOVE_FAVORITE,
} from '@constants/actionTypes';
import { favouriteItem } from './favorite.interface';

export interface FetchFavouritesRequestAction {
  type: typeof FETCH_FAVOURITES_REQUEST;
}

export interface FetchFavouritesSuccessAction {
  type: typeof FETCH_FAVOURITES_SUCCESS;
  payload: favouriteItem[];
}

export interface FetchFavouritesFailureAction {
  type: typeof FETCH_FAVOURITES_FAILURE;
  payload: string;
}

export interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: number;
}

export interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  payload: number;
}

export type FavouritesActionTypes =
  | FetchFavouritesRequestAction
  | FetchFavouritesSuccessAction
  | FetchFavouritesFailureAction
  | AddFavoriteAction
  | RemoveFavoriteAction;
