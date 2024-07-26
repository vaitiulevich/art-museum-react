import { configureStore } from '@reduxjs/toolkit';
import artworksSlice from './slices/artworksSlice';

const store = configureStore({
  reducer: {
    artworks: artworksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
