import React, { memo } from 'react';
import {
  ArtworkContent,
  ArtworkInfo,
  ArtworkTitle,
  ArtworkArtist,
  ArtworDomain,
  FavoriteMark,
} from './styled';
import bookmark from '@assets/icons/bookmark.svg';
import { Link } from 'react-router-dom';

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
  );
};

export default memo(ArtworkContentCard);
