import noImg from '@assets/icons/noImg.png';
import ArtworkContentCard from '@components/ArtworkContentCard/ArtworkContentCard';
import { ROUTES } from '@constants/routes';
import useImgUrl from '@utils/hooks/useImgUrl';
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
  return (
    <ArtworksGrid>
      {artwork.map((art) => (
        <ArtworkCard key={art.id}>
          <Link to={ROUTES.ARTWORK + art.id}>
            <ArtworkImg>
              {art.image_id ? (
                <img src={useImgUrl({ id: art.image_id })} alt={art.title} />
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
