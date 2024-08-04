import { FavouritesState } from 'interfaces/favorite.interface';
import {
  ADD_FAVORITE,
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_REQUEST,
  FETCH_FAVOURITES_SUCCESS,
  REMOVE_FAVORITE,
} from '@constants/actionTypes';
import { FavouritesActionTypes } from 'interfaces/favoriteAction.interface';
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
