import {
  Artwork,
  ArtworksActionTypes,
  FETCH_ARTWORKS_FAILURE,
  FETCH_ARTWORKS_REQUEST,
  FETCH_ARTWORKS_SUCCESS,
  FETCH_MORE_ARTWORKS_FAILURE,
  FETCH_MORE_ARTWORKS_REQUEST,
  FETCH_MORE_ARTWORKS_SUCCESS,
  SET_CURRENT_PAGE,
  SET_QUERY,
} from '../actions/artworksActions';

interface ArtworksState {
  artworks: Artwork[];
  moreArtworks: Artwork[];
  isLoading: boolean;
  isLoadingMoreArtworks: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  query: string;
}

const initialState: ArtworksState = {
  artworks: [],
  moreArtworks: [],
  isLoading: false,
  isLoadingMoreArtworks: false,
  error: null,
  totalPages: 1,
  currentPage: 1,
  query: '',
};

const artworksReducer = (
  state = initialState,
  action: ArtworksActionTypes,
): ArtworksState => {
  switch (action.type) {
    case FETCH_ARTWORKS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_ARTWORKS_SUCCESS:
      return {
        ...state,
        artworks: action.payload.data,
        isLoading: false,
        totalPages: action.payload.pagination.total_pages,
      };
    case FETCH_ARTWORKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_MORE_ARTWORKS_REQUEST:
      return {
        ...state,
        isLoadingMoreArtworks: true,
        error: null,
      };
    case FETCH_MORE_ARTWORKS_SUCCESS:
      return {
        ...state,
        moreArtworks: action.payload.data,
        isLoadingMoreArtworks: false,
      };
    case FETCH_MORE_ARTWORKS_FAILURE:
      return {
        ...state,
        isLoadingMoreArtworks: false,
        error: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default artworksReducer;
