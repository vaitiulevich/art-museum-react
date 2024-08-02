import Pagination from '@components/Pagination/Pagination';
import { fireEvent,render, screen } from '@testing-library/react';
import React from 'react';

const defaultProps = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: jest.fn(),
};

test('calls onPageChange when a page number is clicked', () => {
  render(<Pagination {...defaultProps} />);
  const pageNumber = screen.getByText('2');
  fireEvent.click(pageNumber);
  expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
});

test('calls onPageChange with the correct page number when next button is clicked', () => {
  render(<Pagination {...defaultProps} />);
  fireEvent.click(screen.getByAltText('next'));
  expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
});

test('calls onPageChange with the correct page number when previous button is clicked', () => {
  render(<Pagination {...defaultProps} currentPage={2} />);
  fireEvent.click(screen.getByAltText('previous'));
  expect(defaultProps.onPageChange).toHaveBeenCalledWith(1);
});
