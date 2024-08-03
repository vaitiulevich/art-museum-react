export const FETCH_FAVOURITES_REQUEST = 'favourites/FETCH_FAVOURITES_REQUEST';
export const FETCH_FAVOURITES_SUCCESS = 'favourites/FETCH_FAVOURITES_SUCCESS';
export const FETCH_FAVOURITES_FAILURE = 'favourites/FETCH_FAVOURITES_FAILURE';
export const ADD_FAVORITE = 'favourites/ADD_FAVORITE';
export const REMOVE_FAVORITE = 'favourites/REMOVE_FAVORITE';

interface FetchFavouritesRequestAction {
  type: typeof FETCH_FAVOURITES_REQUEST;
}
interface favouriteItem {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  is_public_domain: boolean;
}

interface FetchFavouritesSuccessAction {
  type: typeof FETCH_FAVOURITES_SUCCESS;
  payload: favouriteItem[];
}

interface FetchFavouritesFailureAction {
  type: typeof FETCH_FAVOURITES_FAILURE;
  payload: string;
}

interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: number;
}

interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  payload: number;
}

export type FavouritesActionTypes =
  | FetchFavouritesRequestAction
  | FetchFavouritesSuccessAction
  | FetchFavouritesFailureAction
  | AddFavoriteAction
  | RemoveFavoriteAction;

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
