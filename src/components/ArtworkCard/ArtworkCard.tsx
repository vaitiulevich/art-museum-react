import ArtworkContentCard from '@components/ArtworkContentCard/ArtworkContentCard';
import { images } from '@constants/images';
import { ROUTES } from '@constants/routes';
import useImgUrl from '@utils/hooks/useImgUrl';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { ArtworkCardContainer, ArtworkContent, ArtworkImg } from './styled';
import { ArtworkProps } from 'interfaces/artwork.interface';

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
            <img src={images.noImg} alt="no img" />
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
