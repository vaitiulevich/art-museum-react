import { MAX_VISIBLE_PAGE } from '@constants/constants';

export const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
): number[] => {
  const startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGE / 2));
  const endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGE - 1);

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );
};
