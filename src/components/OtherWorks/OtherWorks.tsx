import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchMoreArtworks } from '../../store/slices/artworksSlice';
import Loader from '@components/Loader/Loader';
import ArtworkContentCard from '@components/ArtworkContentCard/ArtworkContentCard';
import {
  OtherWorksContainer,
  OtherWorksHeadline,
  SubTitle,
  Title,
  ArtworksGrid,
  ArtworkImg,
  ArtworkCard,
} from './styled';
import { ART_IMG_URL } from '@constants/constants';

const OtherWorks: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { moreArtworks, isLoadingMoreArtworks, error } = useSelector(
    (state: RootState) => state.artworks,
  );

  useEffect(() => {
    dispatch(fetchMoreArtworks({ limit: 9 }));
  }, [dispatch]);

  const getImageUrl = (imageId: string) =>
    `${ART_IMG_URL}${imageId}/full/890,/0/default.jpg`;

  return (
    <OtherWorksContainer>
      <OtherWorksHeadline>
        <SubTitle>Here are some more</SubTitle>
        <Title>Other works for you</Title>
      </OtherWorksHeadline>
      {isLoadingMoreArtworks && <Loader />}
      {error && <p>{error}</p>}
      <ArtworksGrid>
        {moreArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id}>
            <ArtworkImg>
              {artwork.image_id && (
                <img src={getImageUrl(artwork.image_id)} alt={artwork.title} />
              )}
            </ArtworkImg>
            <ArtworkContentCard key={artwork.id} artwork={artwork} />
          </ArtworkCard>
        ))}
      </ArtworksGrid>
    </OtherWorksContainer>
  );
};

export default OtherWorks;
