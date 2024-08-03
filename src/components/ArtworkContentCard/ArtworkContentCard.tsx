import FavoriteMark from '@components/FavoriteMark/FavoriteMark';
import { ROUTES } from '@constants/routes';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import {
  ArtworDomain,
  ArtworkArtist,
  ArtworkContent,
  ArtworkInfo,
  ArtworkTitle,
} from './styled';

interface ArtworkProps {
  artwork: {
    id: number;
    title: string;
    artist_title: string;
    image_id: string;
    is_public_domain: boolean;
  };
}

const ArtworkContentCard: React.FC<ArtworkProps> = ({ artwork }) => {
  return (
    <ArtworkContent className="artwork-content">
      <ArtworkInfo>
        <ArtworkTitle>
          <Link to={ROUTES.ARTWORK + artwork.id}>{artwork.title}</Link>
        </ArtworkTitle>
        <ArtworkArtist>{artwork.artist_title}</ArtworkArtist>
        <ArtworDomain>
          {artwork.is_public_domain ? 'Public' : 'Privat'}
        </ArtworDomain>
      </ArtworkInfo>
      <FavoriteMark id={artwork.id} />
    </ArtworkContent>
  );
};

export default memo(ArtworkContentCard);
