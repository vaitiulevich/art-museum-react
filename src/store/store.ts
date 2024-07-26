import { configureStore } from '@reduxjs/toolkit';
import artworksSlice from './slices/artworksSlice';
import favouritesSlice from './slices/favouritesSlice';

const store = configureStore({
  reducer: {
    artworks: artworksSlice,
    favourites: favouritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
