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
import { FetchArtworksResponse } from './artwork.interface';

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
