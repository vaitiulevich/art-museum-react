import noImg from '@assets/icons/noImg.png';
import ArtworkContentCard from '@components/ArtworkContentCard/ArtworkContentCard';
import { ART_IMG_URL } from '@constants/constants';
import React, { memo } from 'react';

import { ArtworkCardContainer, ArtworkContent,ArtworkImg } from './styled';

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
        {artwork.image_id ? (
          <img src={getImageUrl(artwork.image_id)} alt={artwork.title} />
        ) : (
          <img src={noImg} alt="no img" />
        )}
      </ArtworkImg>
      <ArtworkContent>
        <ArtworkContentCard artwork={artwork} />
      </ArtworkContent>
    </ArtworkCardContainer>
  );
};

export default memo(ArtworkCard);
