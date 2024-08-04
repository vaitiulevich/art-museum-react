import store from '@store/store';
import { fetchArtworksApi } from '@utils/api';
import {
  FetchArtworksResponse,
  fetchMoreArtworksFailure,
  fetchMoreArtworksRequest,
  fetchMoreArtworksSuccess,
} from '@store/actions/artworksActions';
import { OTHER_WORKS_LIMIT } from '@constants/urls';

const dispatch = store.dispatch;

export const loadMoreArtworks = async (sortBy: string) => {
  dispatch(fetchMoreArtworksRequest());
  try {
    const data: FetchArtworksResponse = await fetchArtworksApi({
      limit: OTHER_WORKS_LIMIT,
      isSearchable: true,
      sort: sortBy,
    });
    dispatch(fetchMoreArtworksSuccess(data));
  } catch (error) {
    dispatch(fetchMoreArtworksFailure((error as Error).message));
  }
};
