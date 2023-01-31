import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const DescriptionImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionDetailWrapper = styled.div`
  padding-top: 30px;

  .subtitle {
    color: #7a7a7a;
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
    margin-bottom: 15px;
  }

  .title {
    font-weight: 600;
    font-size: 22px;
    margin: 0;
    margin-bottom: 15px;
  }

  .price {
    font-weight: 300;
    font-size: 36px;
    margin-bottom: 20px;
    display: inline-block;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #3483fa;
  border-color: transparent;
  border-radius: 6px;
  padding: 0 24px;
  height: 48px;
  width: 318px;
  font-weight: 600;
  font-size: 16px;
`;

export const DescriptionTextWrapper = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    font-size: 20px;
    word-break: break-word;
  }
`;
