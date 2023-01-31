import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
  justify-content: right;
`;

export const StyledPagination = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border-color: ##0d6efd;
  border: 1px solid #0d6efd;
  padding: 0.75rem 0.37rem;
  border-radius: 0.375rem;
  cursor: pointer;
  width: 100px;

  &:active {
    background-color: #0a58ca;
    border-color: #0a58ca;
  }
`;