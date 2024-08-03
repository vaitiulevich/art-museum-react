import noImg from '@assets/icons/noImg.png';
import ArtworkContentCard from '@components/ArtworkContentCard/ArtworkContentCard';
import { ROUTES } from '@constants/routes';
import { ART_IMG_URL, ART_IMG_URL_POSTFIX } from '@constants/urls';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { ArtworkCardContainer, ArtworkContent, ArtworkImg } from './styled';

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
    return ART_IMG_URL + imageId + ART_IMG_URL_POSTFIX;
  };
  return (
    <ArtworkCardContainer key={artwork.id}>
      <Link to={ROUTES.ARTWORK + artwork.id}>
        <ArtworkImg>
          {artwork.image_id ? (
            <img src={getImageUrl(artwork.image_id)} alt={artwork.title} />
          ) : (
            <img src={noImg} alt="no img" />
          )}
        </ArtworkImg>
      </Link>
      <ArtworkContent>
        <ArtworkContentCard artwork={artwork} />
      </ArtworkContent>
    </ArtworkCardContainer>
  );
};

export default memo(ArtworkCard);
