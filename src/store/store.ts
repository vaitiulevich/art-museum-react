import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    gallery: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
