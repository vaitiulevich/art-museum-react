import noImg from '@assets/icons/noImg.png';
import ArtworkContentCard from '@components/ArtworkContentCard/ArtworkContentCard';
import { ROUTES } from '@constants/routes';
import { ART_IMG_URL, ART_IMG_URL_POSTFIX } from '@constants/urls';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { ArtworkCard, ArtworkImg, ArtworksGrid } from './styled';

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
    ART_IMG_URL + imageId + ART_IMG_URL_POSTFIX;

  return (
    <ArtworksGrid>
      {artwork.map((art) => (
        <ArtworkCard key={art.id}>
          <Link to={ROUTES.ARTWORK + art.id}>
            <ArtworkImg>
              {art.image_id ? (
                <img src={getImageUrl(art.image_id)} alt={art.title} />
              ) : (
                <img src={noImg} alt="no img" />
              )}
            </ArtworkImg>
          </Link>
          <ArtworkContentCard artwork={art} />
        </ArtworkCard>
      ))}
    </ArtworksGrid>
  );
};

export default memo(ArtworksCatalog);
