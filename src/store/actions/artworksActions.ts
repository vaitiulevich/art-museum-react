export const FETCH_ARTWORKS_REQUEST = 'FETCH_ARTWORKS_REQUEST';
export const FETCH_ARTWORKS_SUCCESS = 'FETCH_ARTWORKS_SUCCESS';
export const FETCH_ARTWORKS_FAILURE = 'FETCH_ARTWORKS_FAILURE';

export const FETCH_MORE_ARTWORKS_REQUEST = 'FETCH_MORE_ARTWORKS_REQUEST';
export const FETCH_MORE_ARTWORKS_SUCCESS = 'FETCH_MORE_ARTWORKS_SUCCESS';
export const FETCH_MORE_ARTWORKS_FAILURE = 'FETCH_MORE_ARTWORKS_FAILURE';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_QUERY = 'SET_QUERY';

export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  is_public_domain: boolean;
}

export interface FetchArtworksResponse {
  data: Artwork[];
  pagination: {
    total_pages: number;
  };
}

export interface FetchArtworksParams {
  limit: number;
  page?: number;
  query?: string;
  ids?: string;
  isPublic?: boolean;
  isSearchable?: boolean;
  sort?: string;
}

export interface FetchArtworksRequestAction {
  type: typeof FETCH_ARTWORKS_REQUEST;
}

export interface FetchArtworksSuccessAction {
  type: typeof FETCH_ARTWORKS_SUCCESS;
  payload: FetchArtworksResponse;
}

export interface FetchArtworksFailureAction {
  type: typeof FETCH_ARTWORKS_FAILURE;
  payload: string;
}

export interface FetchMoreArtworksRequestAction {
  type: typeof FETCH_MORE_ARTWORKS_REQUEST;
}

export interface FetchMoreArtworksSuccessAction {
  type: typeof FETCH_MORE_ARTWORKS_SUCCESS;
  payload: FetchArtworksResponse;
}

export interface FetchMoreArtworksFailureAction {
  type: typeof FETCH_MORE_ARTWORKS_FAILURE;
  payload: string;
}

export interface SetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
}

export interface SetQueryAction {
  type: typeof SET_QUERY;
  payload: string;
}

export type ArtworksActionTypes =
  | FetchArtworksRequestAction
  | FetchArtworksSuccessAction
  | FetchArtworksFailureAction
  | FetchMoreArtworksRequestAction
  | FetchMoreArtworksSuccessAction
  | FetchMoreArtworksFailureAction
  | SetCurrentPageAction
  | SetQueryAction;

export const fetchArtworksRequest = (): FetchArtworksRequestAction => ({
  type: FETCH_ARTWORKS_REQUEST,
});

export const fetchArtworksSuccess = (
  data: FetchArtworksResponse,
): FetchArtworksSuccessAction => ({
  type: FETCH_ARTWORKS_SUCCESS,
  payload: data,
});

export const fetchArtworksFailure = (
  error: string,
): FetchArtworksFailureAction => ({
  type: FETCH_ARTWORKS_FAILURE,
  payload: error,
});

export const fetchMoreArtworksRequest = (): FetchMoreArtworksRequestAction => ({
  type: FETCH_MORE_ARTWORKS_REQUEST,
});

export const fetchMoreArtworksSuccess = (
  data: FetchArtworksResponse,
): FetchMoreArtworksSuccessAction => ({
  type: FETCH_MORE_ARTWORKS_SUCCESS,
  payload: data,
});

export const fetchMoreArtworksFailure = (
  error: string,
): FetchMoreArtworksFailureAction => ({
  type: FETCH_MORE_ARTWORKS_FAILURE,
  payload: error,
});

export const setCurrentPage = (page: number): SetCurrentPageAction => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setQuery = (query: string): SetQueryAction => ({
  type: SET_QUERY,
  payload: query,
});
