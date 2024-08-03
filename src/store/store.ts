import artworksReducer from '@store/reducers/artworksReducer';
import favoriteReducer from '@store/reducers/favoriteReduser';
import { combineReducers, legacy_createStore as createStore } from 'redux';

// const store = configureStore({
//   reducer: {
//     artworks: artworksSlice,
//     favourites: favouritesSlice,
//   },
// });
const rootReducer = combineReducers({
  artworks: artworksReducer,
  favourites: favoriteReducer,
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
const store = createStore(rootReducer);

// Определение типов
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
