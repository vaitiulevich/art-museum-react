import { ART_EDU_URL, FIELDS_QUERY } from '@constants/urls';
import axios from 'axios';

interface FetchArtworksParams {
  limit?: number;
  page?: number;
  query?: string;
  ids?: string;
  isPublic?: boolean;
  isSearchable?: boolean;
  sort?: string;
}

export const fetchArtworksApi = async (params: FetchArtworksParams) => {
  const isSearch = params.isSearchable ? '/search?' : '';
  const response = await axios.get(ART_EDU_URL + isSearch, {
    params: {
      query: {
        term: {
          is_public_domain: params.isPublic,
        },
      },
      sort: params.sort,
      limit: params.limit,
      page: params.page,
      q: params.query,
      ids: params.ids,
      fields: FIELDS_QUERY,
    },
  });
  return response.data;
};
