import FavoriteMark from '@components/FavoriteMark/FavoriteMark';
import Loader from '@components/Loader/Loader';
import useImgUrl from '@utils/hooks/useImgUrl';
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
import { fetchArtworkData } from '@utils/artworkPage.utils';

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
    id && fetchArtworkData(id, setData, setIsLoading);
  }, [id]);

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
                <img src={useImgUrl({ id: data.image_id })} alt={data.title} />
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
