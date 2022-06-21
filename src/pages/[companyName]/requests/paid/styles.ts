import styled, { css } from 'styled-components';

export const Container = styled.div``;
export const Command = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  line-height: 11px;
`;

export const Check = styled.div``;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const DateText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export const DayWeekly = styled.div``;
export const DayMonth = styled.div``;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const ServiceText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;
export const Service = styled.div``;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const ValueText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;
export const Price = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
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
  ${props =>
    props.direction
      ? css`
          animation: open 0.5s forwards;
        `
      : css`
          animation: close 0.5s forwards;
        `}
`;
