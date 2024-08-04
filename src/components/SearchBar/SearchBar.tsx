import { images } from '@constants/images';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

import {
  ErrorMessage,
  SearchBarBlock,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from './styled';
import { validationSearch } from '@utils/search.utils';

const SearchBar: React.FC = () => {
  const { query } = useSelector((state: RootState) => state.artworks);
  const [searchQuery, setSearchQuery] = useState<string>(query);
  const [validationError, setValidationError] = useState<string | null>(null);

  const validateAndSearch = useCallback(
    (searchQuery: string) => {
      validationSearch(searchQuery, setValidationError);
    },
    [query],
  );

  const onSetSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    validateAndSearch(e.target.value);
  };

  const onSearch = () => {
    validateAndSearch(searchQuery);
  };

  return (
    <SearchContainer>
      <SearchBarBlock>
        <SearchInput
          type="text"
          onChange={onSetSearchQuery}
          value={searchQuery}
          placeholder="Search Art, Artist, Work..."
        />
        <SearchIcon>
          <img src={images.searchIcon} onClick={onSearch} alt="search" />
        </SearchIcon>
      </SearchBarBlock>
      {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
    </SearchContainer>
  );
};

export default SearchBar;
