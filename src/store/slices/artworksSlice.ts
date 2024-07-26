import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchArtworksApi } from '@utils/api';

interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  is_public_domain: boolean;
}

interface ArtworksState {
  artworks: Artwork[];
  moreArtworks: Artwork[];
  isLoading: boolean;
  isLoadingMoreArtworks: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  query: string;
  isPublic?: boolean;
}

const initialState: ArtworksState = {
  artworks: [],
  moreArtworks: [],
  isLoading: false,
  isLoadingMoreArtworks: false,
  error: null,
  query: '',
  totalPages: 1,
  currentPage: 1,
};

interface FetchArtworksParams {
  limit: number;
  page?: number;
  query?: string;
  ids?: string;
  isPublic?: boolean;
  isSearchable?: boolean;
}

export const fetchArtworks = createAsyncThunk(
  'artworks/fetchArtworks',
  async (params: FetchArtworksParams) => {
    const data = await fetchArtworksApi(params);
    return data;
  },
);

export const fetchMoreArtworks = createAsyncThunk(
  'artworks/fetchMoreArtworks',
  async (params: FetchArtworksParams) => {
    const data = await fetchArtworksApi(params);
    return data;
  },
);

const artworksSlice = createSlice({
  name: 'artworks',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtworks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.artworks = action.payload.data;
        state.isLoading = false;
        state.totalPages = action.payload.pagination.total_pages;
      })
      .addCase(fetchArtworks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch artworks';
      })
      .addCase(fetchMoreArtworks.pending, (state) => {
        state.isLoadingMoreArtworks = true;
        state.error = null;
      })
      .addCase(fetchMoreArtworks.fulfilled, (state, action) => {
        state.moreArtworks = action.payload.data;
        state.isLoadingMoreArtworks = false;
      })
      .addCase(fetchMoreArtworks.rejected, (state, action) => {
        state.isLoadingMoreArtworks = false;
        state.error = action.error.message || 'Failed to fetch artworks';
      });
  },
});

export const { setCurrentPage, setQuery } = artworksSlice.actions;

export default artworksSlice.reducer;
