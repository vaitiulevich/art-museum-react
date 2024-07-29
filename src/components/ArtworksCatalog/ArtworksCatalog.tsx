import React, { memo } from 'react';
import ArtworkContentCard from '@components/ArtworkContentCard/ArtworkContentCard';
import { ArtworksGrid, ArtworkImg, ArtworkCard } from './styled';
import { ART_IMG_URL } from '@constants/constants';
import noImg from '@assets/icons/noImg.png';

interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  is_public_domain: boolean;
}

interface ArtworkProps {
  artwork: Artwork[];
}

const ArtworksCatalog: React.FC<ArtworkProps> = ({ artwork }) => {
  const getImageUrl = (imageId: string) =>
    `${ART_IMG_URL}${imageId}/full/890,/0/default.jpg`;

  return (
    <ArtworksGrid>
      {artwork.map((art) => (
        <ArtworkCard key={art.id}>
          <ArtworkImg>
            {art.image_id ? (
              <img src={getImageUrl(art.image_id)} alt={art.title} />
            ) : (
              <img src={noImg} alt="no img" />
            )}
          </ArtworkImg>
          <ArtworkContentCard artwork={art} />
        </ArtworkCard>
      ))}
    </ArtworksGrid>
  );
};

export default memo(ArtworksCatalog);
