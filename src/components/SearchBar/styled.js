import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 0 2px 2px 0;
  width: 46px;
  height: 40px;
  background-color: #fff;
  border: none;
  color: #666;
  cursor: pointer;
  border-left: 1px solid #e6e6e6;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border-radius: 2px;
  background-color: #fff;
  border: none;
  padding: 7px 15px 9px 15px;
  height: 40px;
  color: #333;
  font-size: 16px;
  width: 100%;
  margin: 0;
  max-width: 600px;

  &:focus {
    outline: none;
    back
  }
`;

export const LogoWrapper = styled.div`
  margin-right: 15px;
`;
