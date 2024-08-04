import { images } from '@constants/images';
import React, { memo, useCallback } from 'react';

import { ArrowButton, PageNumber, PaginationContainer } from './styled';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages],
  );

  const renderPageNumbers = useCallback(() => {
    const pages = [];
    const startPage = currentPage;
    const endPage = Math.min(totalPages, currentPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageNumber
          key={i}
          $isactive={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </PageNumber>,
      );
    }

    return pages;
  }, [currentPage, totalPages, handlePageChange]);

  return (
    <PaginationContainer>
      <ArrowButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={images.leftArrow} alt="previous" />
      </ArrowButton>
      {renderPageNumbers()}
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
