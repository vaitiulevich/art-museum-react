import ArtworkCard from '@components/ArtworkCard/ArtworkCard';
import Loader from '@components/Loader/Loader';
import Pagination from '@components/Pagination/Pagination';
import React, { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import {
  ArtworksGrid,
  SpecialGalleryContainer,
  SpecialGalleryHeadline,
  SubTitle,
  Title,
} from './styled';
import { loadArtworks, onPageChange } from '@utils/specialGallery.utils';
import { PageChangeProps } from 'interfaces/pagination.interface';

const SpecialGallery: React.FC = () => {
  const { artworks, isLoading, error, currentPage, totalPages, query } =
    useSelector((state: RootState) => state.artworks);

  useEffect(() => {
    loadArtworks(currentPage, query);
  }, [currentPage, query]);

  const handlePageChange: PageChangeProps = useCallback(
    (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [totalPages, currentPage],
  );
  return (
    <SpecialGalleryContainer>
      <SpecialGalleryHeadline>
        <SubTitle>Topics for you</SubTitle>
        <Title>Our special artworks</Title>
      </SpecialGalleryHeadline>
      {isLoading && artworks.length < 1 && <Loader />}
      {error && <p>{error}</p>}
      <ArtworksGrid>
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </ArtworksGrid>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </SpecialGalleryContainer>
  );
};

export default memo(SpecialGallery);
