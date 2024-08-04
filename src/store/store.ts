import artworksReducer from '@store/reducers/artworksReducer';
import favoriteReducer from '@store/reducers/favoriteReduser';
import { combineReducers, legacy_createStore as createStore } from 'redux';

const rootReducer = combineReducers({
  artworks: artworksReducer,
  favourites: favoriteReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
