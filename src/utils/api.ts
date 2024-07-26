import axios from 'axios';
import { ART_EDU_URL } from '@constants/constants';

interface FetchArtworksParams {
  limit: number;
  page?: number;
  query?: string;
  ids?: string;
  isPublic?: boolean;
}

export const fetchArtworksApi = async (params: FetchArtworksParams) => {
  const response = await axios.get(ART_EDU_URL + '/search?', {
    params: {
      'query[term][is_public_domain]': params.isPublic,
      limit: params.limit,
      page: params.page,
      q: params.query,
      ids: params.ids,
      fields: 'id,title,artist_title,image_id,is_public_domain',
    },
  });
  return response.data;
};
