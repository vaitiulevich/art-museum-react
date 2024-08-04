import ArtworksCatalog from '@components/ArtworksCatalog/ArtworksCatalog';
import Loader from '@components/Loader/Loader';
import { RootState } from '@store/store';
import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  OtherWorksContainer,
  OtherWorksHeadline,
  Select,
  SubTitle,
  Title,
} from './styled';
import { loadMoreArtworks } from '@utils/otherWorks.uils';
import { sortOptions } from '@constants/sortOptions';

const OtherWorks: React.FC = () => {
  const { moreArtworks, isLoadingMoreArtworks, error } = useSelector(
    (state: RootState) => state.artworks,
  );
  const [sortBy, setSortBy] = useState<string>('');

  useEffect(() => {
    loadMoreArtworks(sortBy);
  }, [sortBy]);

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
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <ArtworksCatalog artwork={moreArtworks} />
        </>
      )}
      {error && <p>{error}</p>}
    </OtherWorksContainer>
  );
};

export default memo(OtherWorks);
