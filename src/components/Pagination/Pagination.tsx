import { images } from '@constants/images';
import React, { memo, useCallback } from 'react';

import { ArrowButton, PageNumber, PaginationContainer } from './styled';
import { generatePageNumbers } from '@utils/pagination.utils';
import {
  PageChangeProps,
  PaginationProps,
} from 'interfaces/pagination.interface';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange: PageChangeProps = useCallback(
    (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages],
  );

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <PaginationContainer>
      <ArrowButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={images.leftArrow} alt="previous" />
      </ArrowButton>
      {pageNumbers.map((page) => (
        <PageNumber
          key={page}
          $isactive={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </PageNumber>
      ))}
      <ArrowButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={images.rightArrow} alt="next" />
      </ArrowButton>
    </PaginationContainer>
  );
};

export default memo(Pagination);
