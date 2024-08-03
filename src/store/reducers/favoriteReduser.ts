import {
  ADD_FAVORITE,
  FavouritesActionTypes,
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_REQUEST,
  FETCH_FAVOURITES_SUCCESS,
  REMOVE_FAVORITE,
} from '../actions/favoriteActions';

interface favouriteItem {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  is_public_domain: boolean;
}

interface FavouritesState {
  items: number[];
  favourites: favouriteItem[];
  isLoadingFavourites: boolean;
  error: string;
}

const initialState: FavouritesState = {
  items: JSON.parse(localStorage.getItem('favourites') || '[]'),
  isLoadingFavourites: false,
  error: '',
  favourites: [],
};

const favouritesReducer = (
  state = initialState,
  action: FavouritesActionTypes,
): FavouritesState => {
  switch (action.type) {
    case FETCH_FAVOURITES_REQUEST:
      return {
        ...state,
        isLoadingFavourites: true,
      };
    case FETCH_FAVOURITES_SUCCESS:
      return {
        ...state,
        favourites: action.payload,
        isLoadingFavourites: false,
      };
    case FETCH_FAVOURITES_FAILURE:
      return {
        ...state,
        isLoadingFavourites: false,
        error: action.payload,
      };
    case ADD_FAVORITE: {
      const newItemsAdd = [...state.items, action.payload];
      localStorage.setItem('favourites', JSON.stringify(newItemsAdd));
      return {
        ...state,
        items: newItemsAdd,
      };
    }
    case REMOVE_FAVORITE: {
      const newItemsRemove = state.items.filter(
        (item) => item !== action.payload,
      );
      localStorage.setItem('favourites', JSON.stringify(newItemsRemove));
      return {
        ...state,
        items: newItemsRemove,
      };
    }
    default:
      return state;
  }
};

export default favouritesReducer;
