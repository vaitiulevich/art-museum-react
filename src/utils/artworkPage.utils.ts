// src/utils.ts
import axios from 'axios';
import { ART_EDU_URL, ARTWORK_PAGE_FIELDS_QUERY } from '@constants/urls';
import { Dispatch, SetStateAction } from 'react';

interface ArtworkProps {
  title: string;
  artist_title: string;
  artist_id: number;
  image_id: string;
  artist_nacionality: string;
  date_end: number;
  date_start: number;
  credit_line: string;
  dimensions: string;
  place_of_origin: string;
  is_public_domain: boolean;
}

const fetchArtwork = async (id: string): Promise<ArtworkProps | null> => {
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
  setData: Dispatch<SetStateAction<ArtworkProps | null>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
) => {
  setIsLoading(true);
  const artworkData = await fetchArtwork(id);
  setData(artworkData);
  setIsLoading(false);
};
