import ArtworkCard from '@components/ArtworkCard/ArtworkCard';
import Loader from '@components/Loader/Loader';
import Pagination from '@components/Pagination/Pagination';
import { SPEC_GALLERY_LIMIT } from '@constants/urls';
import {
  fetchArtworksFailure,
  fetchArtworksRequest,
  FetchArtworksResponse,
  fetchArtworksSuccess,
  setCurrentPage,
} from '@store/actions/artworksActions';
import { fetchArtworksApi } from '@utils/api';
import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store/store';
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
    loadArtworks();
  }, [currentPage, query]);

  const loadArtworks = async () => {
    dispatch(fetchArtworksRequest());
    try {
      const data: FetchArtworksResponse = await fetchArtworksApi({
        limit: SPEC_GALLERY_LIMIT,
        page: currentPage,
        query,
        isPublic: true,
        isSearchable: true,
      });
      dispatch(fetchArtworksSuccess(data));
    } catch (error) {
      dispatch(fetchArtworksFailure((error as Error).message));
    }
  };

  const handlePageChange = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [currentPage],
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
