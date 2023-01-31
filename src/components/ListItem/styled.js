import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 20px;
  display: flex;
  border-bottom: thin solid #eee;
`;

export const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 24px;
    color: #333;
    font-weight: 400;
    line-height: 1;
  }

  span {
    margin-left: 10px;
  }
`;

export const CartTitle = styled.h2`
  color: #333;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.3;
  margin: 0;
`;

export const CardContent = styled.div`
  padding-top: 20px;
  padding-left: 10px;
  flex: 1;
`;

export const Badge = styled.span`
  background-color: #c6f6d5;
  text-transform: uppercase;
  padding: 5px;
  font-size: 12px;
  border-radius: 5px;
`;
