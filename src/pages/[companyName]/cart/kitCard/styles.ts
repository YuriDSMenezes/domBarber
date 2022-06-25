import { ConvertToRem } from 'helpers';
import styled, { css } from 'styled-components';

export const ItemContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
  padding-bottom: 20px;
`;

export const ItemDescription = styled.div`
  display: flex;
  gap: 10px;
`;

export const OrangeTitle = styled.div`
  color: #ff9933;
  font-weight: 500;
  font-size: ${ConvertToRem(14)};
  margin-bottom: 5px;
`;

export const MediumText = styled.div`
  font-weight: 500;
  color: #fff;
  font-size: ${ConvertToRem(12)};
  margin-top: 5px;
`;

export const SmallText = styled.div`
  font-weight: 400;
  color: #fff;
  font-size: ${ConvertToRem(10)};
`;

export const LargeText = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: ${ConvertToRem(14)};
`;

export const ItemPhoto = styled.div``;

export const Photo = styled.div`
  height: 27px;
  border-radius: 6px;
  margin-bottom: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;

interface ArrowProps {
  direction?: boolean;
}

export const Arrow = styled.div<ArrowProps>`
  @keyframes open {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes close {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  margin-top: 20px;
  ${props =>
    props.direction
      ? css`
          animation: open 0.5s forwards;
        `
      : css`
          animation: close 0.5s forwards;
        `}
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 5px;
`;

export const Column = styled.div``;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #535353;
  position: absolute;
  bottom: -10px;
  left: -10px;
`;
