import axios from 'axios';
import { ART_EDU_URL, ARTWORK_PAGE_FIELDS_QUERY } from '@constants/urls';
import { Dispatch, SetStateAction } from 'react';
import { ArtworkItemProps } from 'interfaces/artwork.interface';

const fetchArtwork = async (id: string): Promise<ArtworkItemProps | null> => {
  try {
    const { data: artworkData } = await axios.get(`${ART_EDU_URL}/${id}`, {
      params: {
        fields: ARTWORK_PAGE_FIELDS_QUERY,
      },
    });
    return artworkData.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchArtworkData = async (
  id: string,
  setData: Dispatch<SetStateAction<ArtworkItemProps | null>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
) => {
  setIsLoading(true);
  const artworkData = await fetchArtwork(id);
  setData(artworkData);
  setIsLoading(false);
};
