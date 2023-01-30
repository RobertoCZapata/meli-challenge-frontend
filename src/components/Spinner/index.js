import React from 'react';
import { StyledSpinner } from './styled';

export const Spinner = () => {
  return (
    <StyledSpinner viewBox='0 0 50 50' data-testid='loading-component'>
      <circle
        className='path'
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='4'
      />
    </StyledSpinner>
  );
};
