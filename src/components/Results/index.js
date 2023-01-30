import React from 'react';
import { ResultsWrapper, SpinnerWrapper } from './styled';
import { useAppContext } from '../../context/AppContext';
import { Spinner } from '../Spinner';

export const Results = ({ children }) => {
  const { isLoading } = useAppContext();

  return (
    <ResultsWrapper>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        children
      )}
    </ResultsWrapper>
  );
};
