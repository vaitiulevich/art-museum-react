import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '@pages/App/App';

jest.mock('@components/Header/Header', () => () => <div>Header</div>);
jest.mock('@components/Footer/Footer', () => () => <div>Footer</div>);

test('renders App component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  expect(screen.getByText('Header')).toBeInTheDocument();
  expect(screen.getByText('Footer')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
});
