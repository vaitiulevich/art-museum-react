import { ART_EDU_URL } from '@constants/constants';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  is_public_domain: boolean;
}

interface ArtworksResponse {
  data: Artwork[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
  };
}

interface SearchState {
  error: string | null;
  currentPage: number;
  totalPages: number;
  query: string;
  artworks: Artwork[];
  isLoading: boolean;
}

const initialState: SearchState = {
  query: '',
  artworks: [],
  error: null,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
};
export const fetchArtworks = createAsyncThunk<
  ArtworksResponse,
  { page: number; query: string }
>('gallery/fetchArtworks', async ({ page, query }) => {
  const response = await axios.get<ArtworksResponse>(
    ART_EDU_URL + '/search?query[term][is_public_domain]=true&',
    {
      params: {
        q: query,
        page,
        limit: 3,
        fields: 'id,title,artist_title,image_id,is_public_domain',
      },
    },
  );
  return response.data;
});

const searchSlice = createSlice({
  name: 'gallery',
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
    builder.addCase(fetchArtworks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArtworks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.artworks = action.payload.data.map((item: Artwork) => ({
        id: item.id,
        title: item.title,
        artist_title: item.artist_title,
        image_id: item.image_id,
        is_public_domain: item.is_public_domain,
      }));
      state.totalPages = Math.ceil(action.payload.pagination.total / 3);
    });
    builder.addCase(fetchArtworks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const { setCurrentPage, setQuery } = searchSlice.actions;

export default searchSlice.reducer;
