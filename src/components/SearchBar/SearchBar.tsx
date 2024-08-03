import searchIcon from '@assets/icons/search.svg';
import { VALID_LEAST_INPUT_MESS } from '@constants/messages';
import {
  fetchArtworksFailure,
  fetchArtworksRequest,
  setCurrentPage,
  setQuery,
} from '@store/actions/artworksActions';
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
  query: yup.string().trim().min(2, VALID_LEAST_INPUT_MESS),
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
        loadArtworks(searchQuery);
        return;
      }
      try {
        await searchSchema.validate({ query: searchQuery });
        loadArtworks(searchQuery);
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          setValidationError(error.message);
        }
      }
    }, 2000),
    [query],
  );

  const loadArtworks = async (searchQuery: string) => {
    dispatch(setCurrentPage(1));
    dispatch(setQuery(searchQuery));
    try {
      dispatch(fetchArtworksRequest());
    } catch (error) {
      dispatch(fetchArtworksFailure((error as Error).message));
    }
  };

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
