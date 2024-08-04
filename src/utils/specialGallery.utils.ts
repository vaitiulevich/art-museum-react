import store from '@store/store';
import { fetchArtworksApi } from '@utils/api';
import {
  fetchArtworksFailure,
  fetchArtworksRequest,
  fetchArtworksSuccess,
  setCurrentPage,
} from '@store/actions/artworksActions';
import { SPEC_GALLERY_LIMIT } from '@constants/urls';
import { FetchArtworksResponse } from 'interfaces/artwork.interface';

const dispatch = store.dispatch;

export const loadArtworks = async (currentPage: number, query: string) => {
  dispatch(fetchArtworksRequest());
  try {
    const data: FetchArtworksResponse = await fetchArtworksApi({
      limit: SPEC_GALLERY_LIMIT,
      page: currentPage,
      query,
      isPublic: true,
      isSearchable: true,
    });
    dispatch(fetchArtworksSuccess(data));
  } catch (error) {
    dispatch(fetchArtworksFailure((error as Error).message));
  }
};

export const onPageChange = (page: number) => {
  dispatch(setCurrentPage(page));
};
