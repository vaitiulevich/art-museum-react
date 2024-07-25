import React, { useEffect, useCallback } from 'react';
import {
  SpecialGalleryContainer,
  SpecialGalleryHeadline,
  SubTitle,
  Title,
  ArtworksGrid,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchArtworks, setCurrentPage } from 'store/slices/searchSlice';
import ArtworkCard from '@components/ArtworkCard/ArtworkCard';
import Pagination from '@components/Pagination/Pagination';
import Loader from '@components/Loader/Loader';

const SpecialGallery: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { artworks, isLoading, error, currentPage, totalPages, query } =
    useSelector((state: RootState) => state.gallery);

  useEffect(() => {
    dispatch(fetchArtworks({ page: currentPage, query }));
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
        <Title>Our special gallery</Title>
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
