import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArtworksApi } from '@utils/api';

interface favouriteItem {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  is_public_domain: boolean;
}

interface favouritesState {
  items: number[];
  favourites: favouriteItem[];
  isLoadingFavourites: boolean;
  error: string;
}

interface FetchFavouritesParams {
  limit: number;
  page?: number;
  ids?: string;
  isPublic?: boolean;
  isSearchable?: boolean;
}

const initialState: favouritesState = {
  items: JSON.parse(localStorage.getItem('favourites') || '[]'),
  isLoadingFavourites: false,
  error: '',
  favourites: [],
};

export const fetchFavourites = createAsyncThunk(
  'artworks/fetchFavourites',
  async (params: FetchFavouritesParams) => {
    const data = await fetchArtworksApi(params);
    return data;
  },
);

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      state.items.push(action.payload);
      localStorage.setItem('favourites', JSON.stringify(state.items));
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item !== action.payload);
      localStorage.setItem('favourites', JSON.stringify(state.items));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavourites.pending, (state) => {
        state.isLoadingFavourites = true;
      })
      .addCase(fetchFavourites.fulfilled, (state, action) => {
        state.favourites = action.payload.data;
        state.isLoadingFavourites = false;
      })
      .addCase(fetchFavourites.rejected, (state, action) => {
        state.isLoadingFavourites = false;
        state.error = action.error.message || 'Failed to fetch artworks';
      });
  },
});

export const { addFavorite, removeFavorite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
