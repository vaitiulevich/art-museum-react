import ArtworkContentCard from '@components/ArtworkContentCard/ArtworkContentCard';
import { images } from '@constants/images';
import { ROUTES } from '@constants/routes';
import useImgUrl from '@utils/hooks/useImgUrl';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { ArtworkCard, ArtworkImg, ArtworksGrid } from './styled';
import { ArtworkCatalogProps } from 'interfaces/artwork.interface';

const ArtworksCatalog: React.FC<ArtworkCatalogProps> = ({ artwork }) => {
  return (
    <ArtworksGrid>
      {artwork.map((art) => (
        <ArtworkCard key={art.id}>
          <Link to={ROUTES.ARTWORK + art.id}>
            <ArtworkImg>
              {art.image_id ? (
                <img src={useImgUrl({ id: art.image_id })} alt={art.title} />
              ) : (
                <img src={images.noImg} alt="no img" />
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
