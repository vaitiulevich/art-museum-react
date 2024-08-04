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
import { ArtworkProps } from 'interfaces/artwork.interface';

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
