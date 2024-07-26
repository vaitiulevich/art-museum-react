import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchMoreArtworks } from '../../store/slices/artworksSlice';
import Loader from '@components/Loader/Loader';
import {
  OtherWorksContainer,
  OtherWorksHeadline,
  SubTitle,
  Title,
} from './styled';
import ArtworksCatalog from '@components/ArtworksCatalog/ArtworksCatalog';

const OtherWorks: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { moreArtworks, isLoadingMoreArtworks, error } = useSelector(
    (state: RootState) => state.artworks,
  );

  useEffect(() => {
    dispatch(fetchMoreArtworks({ limit: 9, isSearchable: true }));
  }, [dispatch]);

  return (
    <OtherWorksContainer>
      <OtherWorksHeadline>
        <SubTitle>Here are some more</SubTitle>
        <Title>Other works for you</Title>
      </OtherWorksHeadline>
      {isLoadingMoreArtworks && <Loader />}
      {error && <p>{error}</p>}
      <ArtworksCatalog artwork={moreArtworks} />
    </OtherWorksContainer>
  );
};

export default OtherWorks;
