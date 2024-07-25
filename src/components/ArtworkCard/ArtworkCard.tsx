import React, { memo } from 'react';
import {
  ArtworkCardContainer,
  ArtworkImg,
  ArtworkContent,
  ArtworkInfo,
  ArtworkTitle,
  ArtworkArtist,
  ArtworDomain,
  FavoriteMark,
} from './styled';
import bookmark from '@assets/icons/bookmark.svg';
import { Link } from 'react-router-dom';
import { ART_IMG_URL } from '@constants/constants';

interface ArtworkProps {
  artwork: {
    id: number;
    title: string;
    artist_title: string;
    image_id: string;
    is_public_domain: boolean;
  };
}

const ArtworkCard: React.FC<ArtworkProps> = ({ artwork }) => {
  const getImageUrl = (imageId: string) => {
    return ART_IMG_URL + imageId + '/full/890,/0/default.jpg';
  };
  return (
    <ArtworkCardContainer key={artwork.id}>
      <ArtworkImg>
        {artwork.image_id && (
          <img src={getImageUrl(artwork.image_id)} alt={artwork.title} />
        )}
      </ArtworkImg>
      <ArtworkContent>
        <ArtworkInfo>
          <ArtworkTitle>
            <Link to={'/artwork/' + artwork.id}>{artwork.title}</Link>
          </ArtworkTitle>
          <ArtworkArtist>{artwork.artist_title}</ArtworkArtist>
          <ArtworDomain>
            {artwork.is_public_domain ? 'Public' : 'Privat'}
          </ArtworDomain>
        </ArtworkInfo>
        <FavoriteMark>
          <div>
            <img src={bookmark} alt="favorites" />
          </div>
        </FavoriteMark>
      </ArtworkContent>
    </ArtworkCardContainer>
  );
};

export default memo(ArtworkCard);
