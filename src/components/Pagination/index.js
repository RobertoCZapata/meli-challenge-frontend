import React, { useState } from 'react';
import { StyledPagination, PaginationWrapper } from './styled';
import { useAppContext } from '../../context/AppContext';

export const Pagination = () => {
  const { getItems, page, changePage } = useAppContext();

  const handleClick = (action) => {
    const query = localStorage.getItem('query');
    let newPage = 0;

    if (action === 'next') {
      newPage = page + 1;
    } else if ('back') {
      newPage = page - 1;
    }

    changePage(newPage);
    getItems(query, newPage);
  };

  const showBackButton = page > 0;

  return (
    <PaginationWrapper>
      {showBackButton && (
        <StyledPagination onClick={() => handleClick('back')}>
          Atras
        </StyledPagination>
      )}

      <StyledPagination onClick={() => handleClick('next')}>
        Siguiente
      </StyledPagination>
    </PaginationWrapper>
  );
};