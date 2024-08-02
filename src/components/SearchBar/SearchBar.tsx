import searchIcon from '@assets/icons/search.svg';
import {
  fetchArtworks,
  setCurrentPage,
  setQuery,
} from '@store/slices/artworksSlice';
import debounce from 'lodash.debounce';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import * as yup from 'yup';

import {
  ErrorMessage,
  SearchBarBlock,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from './styled';

const searchSchema = yup.object().shape({
  query: yup
    .string()
    .trim()
    .min(2, 'Search query must be at least 2 characters long'),
});

const SearchBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { query } = useSelector((state: RootState) => state.artworks);
  const [searchQuery, setSearchQuery] = useState<string>(query);
  const [validationError, setValidationError] = useState<string | null>(null);

  const validateAndSearch = useCallback(
    debounce(async (searchQuery: string) => {
      if (searchQuery.trim() === '') {
        setSearchQuery('');
        dispatch(setCurrentPage(1));
        dispatch(setQuery(searchQuery));
        dispatch(
          fetchArtworks({
            limit: 3,
            page: 1,
            query: searchQuery,
            isSearchable: true,
          }),
        );
        return;
      }
      try {
        await searchSchema.validate({ query: searchQuery });
        setValidationError(null);
        dispatch(setCurrentPage(1));
        dispatch(setQuery(searchQuery));
        dispatch(
          fetchArtworks({
            limit: 3,
            page: 1,
            query: searchQuery,
            isSearchable: true,
          }),
        );
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          setValidationError(error.message);
        }
      }
    }, 2000),
    [dispatch],
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
          <img src={searchIcon} onClick={onSearch} alt="search" />
        </SearchIcon>
      </SearchBarBlock>
      {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
    </SearchContainer>
  );
};

export default SearchBar;
