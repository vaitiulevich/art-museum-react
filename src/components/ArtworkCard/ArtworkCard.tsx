import noImg from '@assets/icons/noImg.png';
import ArtworkContentCard from '@components/ArtworkContentCard/ArtworkContentCard';
import { ROUTES } from '@constants/routes';
import useImgUrl from '@utils/hooks/useImgUrl';
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
  return (
    <ArtworkCardContainer key={artwork.id}>
      <Link to={ROUTES.ARTWORK + artwork.id}>
        <ArtworkImg>
          {artwork.image_id ? (
            <img
              src={useImgUrl({ id: artwork.image_id })}
              alt={artwork.title}
            />
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
