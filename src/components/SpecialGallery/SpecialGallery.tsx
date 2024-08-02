import ArtworkCard from '@components/ArtworkCard/ArtworkCard';
import Loader from '@components/Loader/Loader';
import Pagination from '@components/Pagination/Pagination';
import React, { useCallback,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtworks, setCurrentPage } from 'store/slices/artworksSlice';

import { AppDispatch,RootState } from '../../store/store';
import {
  ArtworksGrid,
  SpecialGalleryContainer,
  SpecialGalleryHeadline,
  SubTitle,
  Title,
} from './styled';

const SpecialGallery: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { artworks, isLoading, error, currentPage, totalPages, query } =
    useSelector((state: RootState) => state.artworks);

  useEffect(() => {
    dispatch(
      fetchArtworks({
        limit: 3,
        page: currentPage,
        query,
        isPublic: true,
        isSearchable: true,
      }),
    );
  }, [dispatch, currentPage, query]);

  const handlePageChange = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch],
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

export default SpecialGallery;
