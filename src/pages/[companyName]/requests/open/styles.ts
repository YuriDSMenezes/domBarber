import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Content = styled.div`
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 50px;
`;
export const Command = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  line-height: 11px;
  margin: 30px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

export const Check = styled.input`
  width: 18px;
  height: 18px;
  background-color: var(--color-primary);
  border: none;
  border-radius: 4px;
`;

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

export const Button = styled.div`
  margin-bottom: 30px;
`;
