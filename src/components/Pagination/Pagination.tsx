import React, { memo } from 'react';
import { ArrowButton, PageNumber, PaginationContainer } from './styled';
import RightArrow from '@assets/icons/RightArrow.svg';
import LeftArrow from '@assets/icons/LeftArrow.svg';

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
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
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
  };

  return (
    <PaginationContainer>
      <ArrowButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={LeftArrow} alt="previous" />
      </ArrowButton>
      {renderPageNumbers()}
      <ArrowButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={RightArrow} alt="next" />
      </ArrowButton>
    </PaginationContainer>
  );
};

export default memo(Pagination);
