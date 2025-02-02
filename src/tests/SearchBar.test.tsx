import SearchBar from '@components/SearchBar/SearchBar';
import store from '@store/store';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

jest.mock('lodash.debounce', () =>
  jest.fn((fn) => {
    fn.cancel = jest.fn();
    return fn;
  }),
);
jest.mock('@assets/icons/search.svg', () => 'search-icon-mock');

describe('SearchBar Component', () => {
  test('renders SearchBar component', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );

    expect(
      screen.getByPlaceholderText('Search Art, Artist, Work...'),
    ).toBeInTheDocument();
  });

  test('validates input and shows error message for short queries', async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );

    const input = screen.getByPlaceholderText('Search Art, Artist, Work...');
    fireEvent.change(input, { target: { value: 'a' } });

    expect(
      await screen.findByText(
        'Search query must be at least 2 characters long',
      ),
    ).toBeInTheDocument();
  });
});
