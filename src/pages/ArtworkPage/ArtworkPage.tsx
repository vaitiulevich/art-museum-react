import FavoriteMark from '@components/FavoriteMark/FavoriteMark';
import Loader from '@components/Loader/Loader';
import {
  ART_EDU_URL,
  ART_IMG_URL,
  ART_IMG_URL_POSTFIX,
  ARTWORK_PAGE_FIELDS_QUERY,
} from '@constants/urls';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  ArtworDomain,
  ArtworkArtist,
  ArtworkContent,
  ArtworkDates,
  ArtworkDetails,
  ArtworkHeadline,
  ArtworkImg,
  ArtworkImgBlock,
  ArtworkLoader,
  ArtworkPageContainer,
  FavoriteMarkBlock,
} from './styled';

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

const ArtworkPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ArtworkProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArtworkData = async () => {
      try {
        setIsLoading(true);
        const { data: artworkData } = await axios.get(`${ART_EDU_URL}/${id}`, {
          params: {
            fields: ARTWORK_PAGE_FIELDS_QUERY,
          },
        });

        setData(artworkData.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtworkData();
  }, [id]);

  const getImageUrl = (imageId: string) => {
    return ART_IMG_URL + imageId + ART_IMG_URL_POSTFIX;
  };

  return (
    <ArtworkPageContainer>
      {isLoading ? (
        <ArtworkLoader>
          <Loader />
        </ArtworkLoader>
      ) : (
        data && (
          <>
            <ArtworkImgBlock>
              <ArtworkImg>
                <img src={getImageUrl(data.image_id)} alt={data.title} />
              </ArtworkImg>
              <FavoriteMarkBlock>
                {id && <FavoriteMark id={+id} />}
              </FavoriteMarkBlock>
            </ArtworkImgBlock>
            <ArtworkContent>
              <div>
                <ArtworkHeadline>{data.title}</ArtworkHeadline>
                <ArtworkArtist>{data.artist_title}</ArtworkArtist>
                <ArtworkDates>
                  {data.date_start === data.date_end
                    ? data.date_end
                    : `${data.date_start}-${data.date_end}`}
                </ArtworkDates>
              </div>
              <div>
                <ArtworkHeadline>Overview</ArtworkHeadline>
                <ArtworkDetails>
                  <span>Artist nationality:</span>
                  {data.artist_nacionality}
                </ArtworkDetails>
                <ArtworkDetails>
                  <span>Dimensions:</span>
                  {data.dimensions}
                </ArtworkDetails>
                <ArtworkDetails>
                  <span>Credit Line:</span>
                  {data.credit_line}
                </ArtworkDetails>
                <ArtworkDetails>
                  <span>Place of Origin:</span>
                  {data.place_of_origin}
                </ArtworkDetails>
                <ArtworDomain>
                  {data.is_public_domain ? 'Public' : 'Private'}
                </ArtworDomain>
              </div>
            </ArtworkContent>
          </>
        )
      )}
    </ArtworkPageContainer>
  );
};

export default ArtworkPage;
