import {
  FETCH_ARTWORKS_FAILURE,
  FETCH_ARTWORKS_REQUEST,
  FETCH_ARTWORKS_SUCCESS,
  FETCH_MORE_ARTWORKS_FAILURE,
  FETCH_MORE_ARTWORKS_REQUEST,
  FETCH_MORE_ARTWORKS_SUCCESS,
  SET_CURRENT_PAGE,
  SET_QUERY,
} from '@constants/actionTypes';
import { FetchArtworksResponse } from 'interfaces/artwork.interface';
import {
  FetchArtworksFailureAction,
  FetchArtworksRequestAction,
  FetchArtworksSuccessAction,
  FetchMoreArtworksFailureAction,
  FetchMoreArtworksRequestAction,
  FetchMoreArtworksSuccessAction,
  SetCurrentPageAction,
  SetQueryAction,
} from 'interfaces/artworkAction.interface';

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
