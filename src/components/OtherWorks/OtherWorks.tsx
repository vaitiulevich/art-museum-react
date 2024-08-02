import ArtworksCatalog from '@components/ArtworksCatalog/ArtworksCatalog';
import Loader from '@components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMoreArtworks } from '../../store/slices/artworksSlice';
import { AppDispatch,RootState } from '../../store/store';
import {
  OtherWorksContainer,
  OtherWorksHeadline,
  Select,
  SubTitle,
  Title,
} from './styled';

const OtherWorks: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { moreArtworks, isLoadingMoreArtworks, error } = useSelector(
    (state: RootState) => state.artworks,
  );
  const [sortBy, setSortBy] = useState<string>('');

  useEffect(() => {
    dispatch(fetchMoreArtworks({ limit: 9, isSearchable: true, sort: sortBy }));
  }, [dispatch, sortBy]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <OtherWorksContainer>
      <OtherWorksHeadline>
        <SubTitle>Here are some more</SubTitle>
        <Title>Other works for you</Title>
      </OtherWorksHeadline>

      {isLoadingMoreArtworks ? (
        <Loader />
      ) : (
        <>
          <Select onChange={handleSortChange} value={sortBy}>
            <option value="">Sort by default</option>
            <option value="is_public_domain">With privat domain</option>
            <option value="date_start">Sort by Established Date</option>
            <option value="id">Sort by ID</option>
          </Select>
          <ArtworksCatalog artwork={moreArtworks} />
        </>
      )}
      {error && <p>{error}</p>}
    </OtherWorksContainer>
  );
};

export default OtherWorks;
