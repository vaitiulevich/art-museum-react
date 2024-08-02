import App from '@pages/App/App';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

jest.mock('@components/Header/Header', () => {
  const MockHeader = () => <div>Header</div>;
  MockHeader.displayName = 'MockHeader';
  return MockHeader;
});

jest.mock('@components/Footer/Footer', () => {
  const MockFooter = () => <div>Footer</div>;
  MockFooter.displayName = 'MockFooter';
  return MockFooter;
});

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
