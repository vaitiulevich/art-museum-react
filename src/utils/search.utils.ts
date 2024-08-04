import debounce from 'lodash.debounce';
import * as yup from 'yup';
import store from '@store/store';
import {
  fetchArtworksFailure,
  fetchArtworksRequest,
  setCurrentPage,
  setQuery,
} from '@store/actions/artworksActions';
import { VALID_LEAST_INPUT_MESS } from '@constants/messages';

const searchSchema = yup.object().shape({
  query: yup.string().trim().min(2, VALID_LEAST_INPUT_MESS),
});

const dispatch = store.dispatch;

const loadArtworks = async (searchQuery: string) => {
  dispatch(setCurrentPage(1));
  dispatch(setQuery(searchQuery));
  try {
    dispatch(fetchArtworksRequest());
  } catch (error) {
    dispatch(fetchArtworksFailure((error as Error).message));
  }
};

export const validationSearch = debounce(
  async (
    searchQuery: string,
    setValidationError: (message: string | null) => void,
  ) => {
    if (searchQuery.trim() === '') {
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
  },
  2000,
);
